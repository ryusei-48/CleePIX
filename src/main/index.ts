import { app, shell, BrowserWindow, ipcMain } from 'electron'
import Store from 'electron-store';
import { join } from 'path'
import fs from "fs";
//import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../build/icon.png?asset'
import Database from "better-sqlite3-multiple-ciphers";
import * as cheerio from 'cheerio';
import { parseByString, IBaseMark } from "bookmark-file-parser";

export type storeConfig = {
  instance?: { label: string, id: number, path: string }[],
  cache?: {
    currentInstanceId: number,
    tagTreeDomStrings: { [key: number]: string } | null
  }
}

const USER_DATA_PATH = app.getPath('userData');
const STORAGE_PATH = USER_DATA_PATH + '/storage/database';

const CleePIXMain: {

  Windows: { main?: BrowserWindow },
  storage: { [key: number]: { db?: Database.Database, stmt?: { [key: string]: Database.Statement } } },
  config: Store<storeConfig>, configTemp: storeConfig,
  run: () => void, initializeDB: (storage: { label: string, id: number, path: string }) => void,
  createWindowInstance: () => BrowserWindow,
  configUpdate: () => void

} = {

  Windows: {}, storage: {}, configTemp: {},
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

    app.whenReady().then(() => {

      this.Windows.main = this.createWindowInstance();

      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) CleePIXMain.createWindowInstance();
      });
    });

    /*this.config.onDidAnyChange((e) => {
      console.log(e);
    });*/

    ipcMain.handle('get-config', () => {
      return this.config.store;
    });

    ipcMain.handle('bookmark-file', (_, dataString) => {
      const bookmarks = parseByString(dataString.html);
      let results: boolean = false;
      if ( bookmarks.length > 0 ) {
        const importBookmarks = ( bookmarks: IBaseMark[], parentTagId: number | bigint = 0 ) => {
          bookmarks.forEach( item => {
            try {
              if ( item.type === 'folder' ) {
                let tagId: number | bigint = 0;
                const selectedTag = selectTagsTable.get( item.name );
                if ( selectedTag !== undefined ) {
                  const selectedTagStructure = selectTagsStructureTable.get( parentTagId, selectedTag.id );
                  tagId = selectedTag.id;
                  if ( selectedTagStructure === undefined ) {
                    insertTagStructureTable.run( parentTagId, selectedTag.id );
                  }
                }else {
                  const insertedTag = insertTagTable.run( item.name );
                  tagId = insertedTag.lastInsertRowid;
                  if ( insertedTag.changes === 1 ) {
                    insertTagStructureTable.run( parentTagId, insertedTag.lastInsertRowid );
                  }
                }
                if ( item.children.length > 0 ) {
                  importBookmarks( item.children, tagId );
                }
              }else if ( item.type === 'site' ) {
                const selectedBookmark = selectBookmarksTable.get( item.href );
                if ( selectedBookmark !== undefined ) {
                  const selectedTagBookmark = selectBookmarkTagsTable.get( parentTagId, selectedBookmark.id );
                  if ( selectedTagBookmark === undefined ) {
                    insertBookmarkTagsTable.run( parentTagId, selectedBookmark.id );
                  }
                }else {
                  const insertedBookmark = insertBookmarkTabale.run( item.name, item.href );
                  if ( insertedBookmark.changes === 1 ) {
                    insertBookmarkTagsTable.run( parentTagId, insertedBookmark.lastInsertRowid );
                  }
                }
              }
              results = true;
            }catch ( e ) { console.log(e); results = false; }
          });
        }
        const selectTagsTable = this.storage[ dataString.instanceId ].db!
            .prepare(`SELECT * FROM tags WHERE name = ?`);
        const insertTagTable = this.storage[ dataString.instanceId ].db!
            .prepare(`INSERT INTO tags ( name ) VALUES ( ? )`);
        const selectTagsStructureTable = this.storage[ dataString.instanceId ].db!
            .prepare(`SELECT * FROM tags_structure WHERE parent_id = ? AND child_id = ?`);
        const insertTagStructureTable = this.storage[ dataString.instanceId ].db!
            .prepare(`INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`);
        const selectBookmarksTable = this.storage[ dataString.instanceId ].db!
            .prepare(`SELECT * FROM bookmarks WHERE url = ?`);
        const insertBookmarkTabale = this.storage[ dataString.instanceId ].db!
            .prepare(`INSERT INTO bookmarks ( title, url ) VALUES ( ?, ? )`);
        const selectBookmarkTagsTable = this.storage[ dataString.instanceId ].db!
            .prepare(`SELECT * FROM tags_bookmarks WHERE tags_id = ? AND bookmark_id = ?`);
        const insertBookmarkTagsTable = this.storage[ dataString.instanceId ].db!
            .prepare(`INSERT INTO tags_bookmarks ( tags_id, bookmark_id ) VALUES ( ?, ? )`);
        importBookmarks( bookmarks );
      }
      return results;
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
      this.configUpdate();
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

      this.configUpdate();

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
          this.configUpdate();
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

    ipcMain.handle('get-http-request', async (_, url) => {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
        }
      });
      if (response && response.ok) {
        const $ = cheerio.load(await response.text());
        let description = $(`meta[property="og:description"]`).attr('content');
        if (description === undefined) description = $(`meta[name="description"]`).attr('content');
        return {
          title: $('title').text(), description,
          image: $(`meta[property='og:image']`).attr('content')
        }
      } else return null;
    });
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
      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "bookmarks" (
          "id"	INTEGER NOT NULL UNIQUE, "url" TEXT NOT NULL,
          "title"	TEXT NOT NULL, "description"	TEXT,
          "data"	TEXT, "thunb"	TEXT,
          "register_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
          "update_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();
      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "tags" (
          "id"	INTEGER UNIQUE, "name"  TEXT NOT NULL UNIQUE,
          "font_color"	TEXT NOT NULL DEFAULT '#c6c4be',
          "bg_color"	TEXT NOT NULL DEFAULT 'gray',
          "register_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
          "update_time"	TEXT NOT NULL DEFAULT '2023-03-05 06:00:00',
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
        if (err === null) { initDB() }
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
  },

  configUpdate: function () {

    this.Windows.main?.webContents.send('config-update', this.config.store);
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


CleePIXMain.run();