import {app, shell, BrowserWindow, ipcMain} from 'electron';
import Store from 'electron-store';
import { join, resolve } from 'path'
import fs from "fs";
//import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../build/icon.png?asset'
import Database from "better-sqlite3-multiple-ciphers";
import importBookmarksWorker from "./thread-scripts/import-bookmarks?nodeWorker";
import axios from "axios";
import { IBaseMark } from "bookmark-file-parser";

export type storeConfig = {
  instance?: { label: string, id: number, path: string }[],
  cache?: {
    currentInstanceId: number,
    tagTreeDomStrings: { [key: number]: string } | null
  }
}

const USER_DATA_PATH = app.getPath('userData');
const STORAGE_PATH = USER_DATA_PATH + '/storage/database';

const CleePIX: {

  Windows: {
    main?: BrowserWindow, forScraping: BrowserWindow | null,
    forScreenshot: BrowserWindow | null
  },
  storage: {[key: number]: {db?: Database.Database, stmt?: {[key: string]: Database.Database;};};},
  config: Store<storeConfig>, configTemp: storeConfig,
  run: () => void, initializeDB: (storage: {label: string, id: number, path: string;}) => void,
  createWindowInstance: () => BrowserWindow,
  shareParts: {
    getWebpageMetadata: ( url: string ) => Promise<{
      title: string, description: string, image: string | null
    } | null>,
    getDomScreenshot: ( url: string ) => Promise<Electron.NativeImage | undefined>,
    setMetadataAllBookmarks: ( instanceId: number ) => void
  }

} = {

  Windows: { forScraping: null, forScreenshot: null }, storage: {}, configTemp: {},
  config: new Store<storeConfig>(/*{ encryptionKey: 'ymzkrk33' }*/),

  run: function () {

    //this.config.clear();
    if (this.config.size === 0) {
      this.config.store = {
        instance: [{
          label: 'default', id: 1,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }, {
          label: 'main', id: 2,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }],
        cache: { currentInstanceId: 1, tagTreeDomStrings: null }
      }
    }

    this.configTemp = this.config.store;

    this.config.store.instance!.forEach(db => {
      this.initializeDB(db);
    });

    app.whenReady().then(async () => {

      this.Windows.main = this.createWindowInstance();

      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) CleePIX.createWindowInstance();
      });
    });

    this.config.onDidAnyChange(() => {
      this.Windows.main?.webContents.send('config-update', this.config.store);
    });

    ipcMain.handle('get-config', () => {
      return this.config.store;
    });

    ipcMain.handle('bookmark-file', async (_, dataString) => {
      const { parseByString } = await import('bookmark-file-parser');
      const bookmarks = parseByString(dataString.html);
      if (bookmarks.length > 0) {
        const result = await importBookmarks( getInstanceDatabasePath( dataString.instanceId ), bookmarks );
        this.shareParts.setMetadataAllBookmarks( dataString.instanceId );
        return result;
      }else return false;

      async function importBookmarks( databasePath: string | null, bookmarks: IBaseMark[] ) {
        return new Promise( async (resolve) => {
          if ( databasePath ) {
            importBookmarksWorker({
              workerData: { dbPath: databasePath, bookmarks }
            }).on('message', resolve);
          }else resolve( false );
        });
      }

      function getInstanceDatabasePath( instanceId: number ): string | null {
        let databasePath: string | null = null;
        CleePIX.config.store.instance!.forEach((ite, index) => {
          if ( ite.id === instanceId ) {
            databasePath = ite.path; return;
          }
        });
        return databasePath;
      }
    });

    ipcMain.handle('get-bookmarks', (_, query) => {
      if ( query.tagIdChain !== null  ) {
        try {
          const bookmarks = this.storage[ query.instanceId ].db?.prepare(
            `SELECT bookmarks.id, bookmarks.title, bookmarks.url, bookmarks.description,
              bookmarks.thunb, bookmarks.thunb_mime, bookmarks.memo, bookmarks.type, 
              bookmarks.update_time, bookmarks.register_time FROM bookmarks
              JOIN tags_bookmarks AS tbt ON bookmarks.ROWID = tbt.bookmark_id
              JOIN tags ON tbt.tags_id = tags.ROWID
              WHERE tags.ROWID IN (${ query.tagIdChain.map(() => '?').join(',') })
              GROUP BY bookmarks.ROWID HAVING COUNT( bookmarks.ROWID ) = ?
              ORDER BY bookmarks.update_time DESC LIMIT 80`
          ).all( query.tagIdChain, query.tagIdChain.length );
          return bookmarks;
        }catch (e) { console.log(e); return null; }
      }else {
        return this.storage[ query.instanceId ].db?.prepare(
          `SELECT * FROM bookmarks ORDER BY update_time DESC LIMIT 80`
        ).all();
      }
    });

    ipcMain.on('window-close', () => {
      Object.values(this.storage).forEach(value => {
        value.db?.close();
      });
      app.quit();
    });

    ipcMain.on('window-maximize', () => {
      if (this.Windows.main?.isMaximized()) {
        this.Windows.main?.unmaximize();
      } else this.Windows.main?.maximize();
    });

    ipcMain.on('window-minize', () => {
      this.Windows.main?.minimize();
    });

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    });

    ipcMain.on('ite-name-update', (_, ite) => {
      this.config.store.instance!.forEach((i, index) => {
        if (i.id == ite.id) {
          this.configTemp.instance![index].label = ite.name;
          this.config.store = this.configTemp!; return;
        }
      });
    });

    ipcMain.on('set-ite-id-cache', (_, id) => {
      this.configTemp.cache!.currentInstanceId = id;
      this.config.set('cache', this.configTemp.cache);
    });

    ipcMain.handle('set-tag-tree-cache', (_, domString) => {
      this.configTemp.cache!.tagTreeDomStrings = domString;
      this.config.set('cache', this.configTemp.cache);
    });

    ipcMain.handle('add-instance', () => {
      this.configTemp.instance = this.configTemp.instance?.sort((a, b) => {
        return (a.id < b.id) ? -1 : 1;
      });

      const newId: number = this.configTemp.instance!.slice(-1)[0].id + 1;
      const newInstance = { label: 'new instance', id: newId, path: STORAGE_PATH + `/ite_${randomString()}.db` };
      this.configTemp.instance?.push(newInstance);
      this.initializeDB(newInstance);
      //this.config.store = this.configTemp;
      this.config.set('instance', this.configTemp.instance);

      return newInstance;
    });

    ipcMain.on('remove-instance', (_, id) => {
      let instancePath: string = '';
      let instanceId: number = 0;
      let indexTemp: number = 0;
      this.configTemp.instance?.forEach((ite, index) => {
        if (ite.id === id) {
          indexTemp = index;
          instanceId = ite.id;
          instancePath = ite.path; return;
        }
      });

      this.storage[instanceId].db?.close();
      fs.unlink(instancePath, (e) => {
        if (e === null) {
          delete this.storage[instanceId];
          this.configTemp.instance?.splice(indexTemp, 1);
          this.config.set( 'instance', this.configTemp.instance );
        }
      });
    });

    ipcMain.handle('get-add-tag-list', async (_, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      )!.all(query.keyword + '%');
    });

    ipcMain.handle('add-tag-suggest', (_, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      )!.get(query.value + '%');
    });

    ipcMain.handle('add-tag', (_, query) => {
      let res: Database.RunResult | null = null;
      let child_id: number | bigint = 0;
      try {
        res = this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM tags WHERE name = ?`)!.get(query.name);
        child_id = res === undefined ? 0 : (<any>res!).id;
        if (res === undefined) {

          res = this.storage[query.instanceId].db!.prepare(
            `INSERT INTO tags (name) VALUES ( ? )`
          )!.run(query.name);
          child_id = res!.lastInsertRowid;
        }
        this.storage[query.instanceId].db!.prepare(
          `INSERT INTO tags_structure (parent_id, child_id) VALUES ( ?, ? )`
        ).run(query.parentTagId !== null ? query.parentTagId : 0, child_id);
        return res;
      } catch (e) { console.log(e); return null; }
    });

    ipcMain.handle('update-tag-name', (_, query) => {
      let res: Database.RunResult | null = null;
      try {
        res = this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM tags WHERE name = ?`)!.get(query.name);
        if (res === undefined) {
          res = this.storage[query.instanceId].db!.prepare(
            `UPDATE tags SET name = ? WHERE id = ?`)!.run(query.name, query.tagId);
        }
        return res;
      } catch (e) { console.log(e); return null; }
    });

    ipcMain.handle('get-tag-tree', async (_, id) => {
      let res: null | any[], editres: any[] = [];
      try {
        res = this.storage[id].db?.prepare(`SELECT * FROM tags`)!.all()!;
        const isParentQuery = this.storage[id].db?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
        const isHit = isParentQuery?.all(0)!;
        res.forEach((tag) => {
          isHit.forEach(hit => {
            if (tag.id === hit.child_id) {
              editres.push(tag);
            }
          });
        });
      } catch (e) { res = null }
      return editres;
    });

    ipcMain.handle('get-sub-tags', (_, res) => {
      const tagsStructure = this.storage[res.instanceId].db
        ?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
      const tags = this.storage[res.instanceId].db
        ?.prepare(`SELECT * FROM tags WHERE id = ?`)
      const tagsRes: any[] = []
      tagsStructure?.all(res.parentId).forEach(structure => {
        tagsRes.push(tags?.get(structure.child_id));
      })
      return tagsRes;
    });

    ipcMain.handle('update-tag-structure', (_, structure) => {
      try {
        const delRes = this.storage[structure.instanceId].db!.prepare(
          `DELETE FROM tags_structure WHERE parent_id = ? AND child_id = ?`
        ).run(structure.delete.parentId, structure.delete.childId);
        const setRes = this.storage[structure.instanceId].db!.prepare(
          `INSERT INTO tags_structure (parent_id, child_id) VALUES ( ?, ? )`
        ).run(structure.set.parentId, structure.set.childId);
        if (delRes.changes === 1 && setRes.changes === 1) {
          return true;
        } else return false;
      } catch (e) { console.log(e); return false; }
    });

    ipcMain.handle('get-site-metadata', async (_, url) => {
      return await this.shareParts.getWebpageMetadata( url );
    });

    ipcMain.handle('set-metadata-all-bookmarks', async (_, instanceId) => {
      CleePIX.shareParts.setMetadataAllBookmarks( instanceId ); return;
    });

    ipcMain.handle('get-webpage-image', async (_, url) => {
      return await getWebImage( url );
    });

    ipcMain.handle('get-dom-screenshot', async (_, url) => {
      const screenshot = await this.shareParts.getDomScreenshot( url );
      return screenshot!.toPNG();
    });
  },

  shareParts: {

    getWebpageMetadata: async function ( url ) {

      return new Promise<{
        title: string, description: string, image: string | null
      } | null>( async (resolve) => {

        if ( CleePIX.Windows.forScraping === null ) {
          CleePIX.Windows.forScraping = new BrowserWindow({
            width: 1360, height: 830,
            show: false, frame: true,
            autoHideMenuBar: true,
            backgroundColor: "#0f0f0f",
          });
        }

        CleePIX.Windows.forScraping.webContents.audioMuted = true;

        try {
          if ( url.match(/^(https|http):\/\/.*/) ) {
            await CleePIX.Windows.forScraping.loadURL( url )
              .catch(() => { return; });
          }else resolve( null );
        }catch (e) { console.log(e); resolve( null ) }

        CleePIX.Windows.forScraping?.webContents
          .executeJavaScript(`[document.head.innerHTML, document.body.innerHTML]`, true)
          .then( async ( dom ) => {
            const cheerio = await import('cheerio');
            const parser = cheerio.load( `<html><head>${ dom[0] }</head><body>${ dom[1] }</body></html>` )
            let description = parser(`meta[property="og:description"]`).attr('content');
            if (description === undefined) description = parser(`meta[name="description"]`).attr('content');
            const image = parser(`meta[property='og:image']`).attr('content');
            resolve({
              title: parser('title').text(), description: description ? description : '',
              image: image ? image : null
            });
          }).catch(() => { resolve( null ) })
      });
    },

    getDomScreenshot: async function ( url ) {

      if ( CleePIX.Windows.forScreenshot === null ) {
        CleePIX.Windows.forScreenshot = new BrowserWindow({
          width: 1360, height: 830,
          show: false, frame: true,
          autoHideMenuBar: true,
          backgroundColor: "#0f0f0f",
        });
      }

      CleePIX.Windows.forScreenshot.webContents.audioMuted = true;

      try {
        if ( url.match(/^(https|http):\/\/.*/) ) {
          await CleePIX.Windows.forScreenshot?.loadURL( url )
            .catch(() => { return });
        }else return undefined;
      }catch (e) { console.log(e); return undefined; }

      const rect = CleePIX.Windows.forScreenshot?.getBounds();
      rect!.x = 0;
      rect!.y = 0;

      return await CleePIX.Windows.forScreenshot?.webContents
        .capturePage( rect, { stayHidden: true } );
    },

    setMetadataAllBookmarks: async function ( instanceId ) {

      try {
        const allBookmarks = CleePIX.storage[ instanceId ].db?.prepare(`SELECT * FROM bookmarks`).all();
        const updateBookmarks = CleePIX.storage[ instanceId ].db
          ?.prepare(`UPDATE bookmarks SET description = ?, thunb = ?, thunb_mime = ? WHERE id = ?`);
        const { fileTypeFromBuffer } = await import('file-type');
        let count: number = 0;
        for ( const bookmark of allBookmarks! ) {
          console.log(bookmark.url);
          count++;
          console.log(count);
          const metadata = await this.getWebpageMetadata( bookmark.url );
          if ( metadata && metadata.image ) {
            const imageBuffer = await getWebImage( metadata.image );
            let type: any = undefined;
            if ( imageBuffer ) {
              type = await fileTypeFromBuffer( imageBuffer! );
            }
            updateBookmarks?.run(
              metadata.description, 
              type && type.mime.match(/^image\//) ? imageBuffer! : null,
              type && type.mime.match(/^image\//) ? type.mime : null, bookmark.id
            );
          }else if ( metadata && metadata.image === null ) {
            const image = await this.getDomScreenshot( bookmark.url );
            updateBookmarks?.run(
              metadata.description, image ? image.toPNG() : null, 'image/png', bookmark.id
            );
          }
        }
      }catch (e) { console.log(e) }
    }
  },

  initializeDB: function (storage) {

    this.storage[storage.id] = {}
    this.storage[storage.id].stmt = {}
    if (fs.existsSync(STORAGE_PATH) && fs.existsSync(storage.path)) {
      this.storage[storage.id].db = new Database(storage.path); return;
    }

    const initDB = (): void => {

      this.storage[storage.id].db = new Database(storage.path);
      //this.storage.main.db.pragma(`cipher='aes256cbc'`);
      //this.storage.main.pragma("key='ymzkrk33'");
      this.storage[storage.id].db?.pragma('journal_mode = WAL');
      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "bookmarks" (
          "id" INTEGER NOT NULL UNIQUE, "url" TEXT NOT NULL,
          "title"	TEXT NOT NULL, "description"	TEXT,
          "data" TEXT, "thunb" BLOB, "thunb_mime" TEXT, "memo" TEXT,
          "type" TEXT NOT NULL DEFAULT 'general',
          "register_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          "update_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();
      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "tags" (
          "id"	INTEGER UNIQUE, "name"  TEXT NOT NULL UNIQUE,
          "font_color"	TEXT NOT NULL DEFAULT '#c6c4be',
          "bg_color"	TEXT NOT NULL DEFAULT 'gray',
          "register_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          "update_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();
      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "tags_bookmarks" (
          "tags_id"	INTEGER NOT NULL, "bookmark_id"	INTEGER NOT NULL,
          FOREIGN KEY("bookmark_id") REFERENCES "bookmarks"("id") on delete cascade,
          FOREIGN KEY("tags_id") REFERENCES "tags"("id") on delete cascade,
          PRIMARY KEY("tags_id","bookmark_id")
        )`
      ).run();
      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "tags_structure" (
          "parent_id"	INTEGER NOT NULL, "child_id"	INTEGER NOT NULL,
          FOREIGN KEY("child_id") REFERENCES "tags"("id") ON DELETE CASCADE,
          PRIMARY KEY("parent_id", "child_id")
        )`
      ).run();

      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX bk1 ON bookmarks( id, url, update_time, register_time )`).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX tg1 ON tags( id, name, update_time, register_time )`).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX tb1 ON tags_bookmarks( tags_id, bookmark_id )`).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX ts1 ON tags_structure( parent_id, child_id )`).run();

      [
        'プログラミング', 'プログラミング言語', 'プロミス', 'プロパンガス',
        'engineer', 'エンジニア', 'Programming', 'promise', 'glass', 'グラス',
        'Python', 'C/C++', 'JavaScript', 'TypeScript', 'PHP', 'HTML', 'SCSS', 'Rust',
        'フリーランス', 'フルスタック', 'インフラ', 'フロントエンド', 'サーバーサイド'
      ].forEach(word => {
        this.storage[storage.id].db!.prepare(
          `INSERT INTO tags (name) VALUES ( ? )`
        ).run(word);
      });

      for (let i = 1; i <= 10; i++) {
        this.storage[storage.id].db!.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(0, i);
      }

      for (let i = 11; i <= 18; i++) {
        this.storage[storage.id].db!.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(2, i);
      }

      for (let i = 19; i <= 23; i++) {
        this.storage[storage.id].db!.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(6, i);
      }
    }

    if (!fs.existsSync(STORAGE_PATH)) {
      fs.mkdir(STORAGE_PATH, (err) => {
        if (err === null) {initDB();}
      });
    } else initDB();

  },

  createWindowInstance: function () {

    const window = new BrowserWindow({
      width: 1360,
      height: 830,
      show: false, frame: false,
      autoHideMenuBar: true,
      backgroundColor: "#0f0f0f",
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false, webviewTag: true
      }
    })

    window.on('ready-to-show', () => {
      window.show()
    })

    window.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
      window.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      window.loadFile(join(__dirname, '../renderer/index.html'))
    }

    return window;
  }
}

function randomString(len: number = 10): string {

  let str: string = "0123456789abcdefghijklmnopqrstuvwxyz";
  let strLen: number = str.length;
  let result: string = '';

  for (let i = 0; i < len; i++) {
    result += str[Math.floor(Math.random() * strLen)];
  }

  return result;
}

function getStrDatetime() {

  const date = new Date();

  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  const h = ('0' + date.getHours()).slice(-2);
  const mi = ('0' + date.getMinutes()).slice(-2);
  const s = ('0' + date.getSeconds()).slice(-2);

  return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;
}

function getWebContent( url: string ): Promise<Response | null> {

  return new Promise((resolve) => {
    fetch( url, {
      method: 'GET',
      //mode: 'no-cors',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
      }
    }).then(resolve).catch(() => { resolve( null ) });
  });
}

async function getWebImage( url: string ): Promise<Buffer | null> {

  return new Promise((resolve) => {

    axios.get( url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
      },
      responseType: 'arraybuffer',
      timeout: 6000
    }).then( async ( response ) => {
      resolve( Buffer.from( response.data ) );
    }).catch((err) => { console.log(err); resolve( null ) });
  });
}

// App init
CleePIX.run();