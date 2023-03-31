import { app, shell, BrowserWindow, ipcMain } from 'electron'
import Store from 'electron-store';
import { join } from 'path'
import fs from "fs";
//import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../build/icon.png?asset'
import Database from "better-sqlite3-multiple-ciphers";

export type storeConfig = { instance?: { label: string, id: number, path: string }[] }

const USER_DATA_PATH = app.getPath('userData');
const STORAGE_PATH = USER_DATA_PATH + '/storage/database';

const CleePIXMain: {

  Windows: { main?: BrowserWindow },
  storage: { [key: number]: { db?: Database.Database, stmt?: { [key: string]: Database.Statement } } },
  config: Store<storeConfig>, configTemp: storeConfig,
  run: () => void, initializeDB: (storage: { label: string, id: number, path: string }) => void,
  createWindowInstance: () => BrowserWindow

} = {

  Windows: {}, storage: {}, configTemp: {},
  config: new Store<storeConfig>({ encryptionKey: 'ymzkrk33' }),

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
        }]
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

    ipcMain.handle('get-instance-db', () => {
      return this.config.store.instance;
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

    ipcMain.handle('add-instance', () => {
      this.configTemp.instance = this.configTemp.instance?.sort( ( a, b ) => {
        return ( a.id < b.id ) ? -1 : 1;
      });

      const newId: number = this.configTemp.instance!.slice(-1)[0].id + 1;
      const newInstance = { label: 'new instance', id: newId, path: STORAGE_PATH + `/ite_${randomString()}.db` };
      this.configTemp.instance?.push( newInstance );
      this.initializeDB( newInstance );
      this.config.store = this.configTemp;

      this.Windows.main?.webContents.send('instance-update', this.config.store);

      return newInstance;
    });

    ipcMain.on('remove-instance', ( _, id ) => {
      let instancePath: string = '';
      let instanceId: number = 0;
      let indexTemp: number = 0;
      this.configTemp.instance?.forEach( ( ite, index ) => {
        if ( ite.id === id ) {
          indexTemp = index;
          instanceId = ite.id;
          instancePath = ite.path; return;
        }
      });

      this.storage[ instanceId ].db?.close();
      fs.unlink( instancePath, (e) => {
        console.log(e);
        if ( e === null ) {
          delete this.storage[ instanceId ];
          this.configTemp.instance?.splice( indexTemp, 1 );
          this.config.store = this.configTemp;
          this.Windows.main?.webContents.send('ite-change', this.config.store);
        }
      });
    });

    ipcMain.handle('get-add-tag-list', async (_, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      )!.all(query.keyword + '%');
    });

    ipcMain.handle('get-tag-tree', async (_, id) => {
      let res: null | any[], editres: any[] = [];
      try {
        res = this.storage[id].db?.prepare(`SELECT * FROM tags`)!.all()!;
        const isParentQuery = this.storage[id].db?.prepare(`SELECT * FROM tags_structure WHERE child_id = ?`);
        res.forEach( ( tag ) => {
          const isHit = isParentQuery?.all( tag.id )!;
          if ( isHit.length === 0 ) {
            editres.push( tag );
          }
        });
      } catch (e) { res = null }
      return editres;
    });

    ipcMain.handle('get-sub-tags', ( _, res ) => {
      const tagsStructure = this.storage[ res.instanceId ].db
        ?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
      const tags = this.storage[ res.instanceId ].db
        ?.prepare(`SELECT * FROM tags WHERE id = ?`)
      const tagsRes: any[] = []
      tagsStructure?.all( res.tagId ).forEach( structure => {
        tagsRes.push( tags?.get( structure.child_id ) );
      })
      return tagsRes;
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
              "id"	INTEGER NOT NULL UNIQUE, "type"	TEXT NOT NULL,
              "title"	TEXT NOT NULL, "description"	TEXT,
              "data"	TEXT NOT NULL, "thunb"	TEXT NOT NULL,
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
              FOREIGN KEY("parent_id") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE,
              FOREIGN KEY("child_id") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE,
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

      for (let i = 11; i <= 18; i++) {
        this.storage[storage.id].db!.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run( 2, i );
      }

      for (let i = 19; i <= 23; i++) {
        this.storage[storage.id].db!.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run( 6, i );
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