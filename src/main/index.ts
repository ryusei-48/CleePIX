import {
  app, shell, BrowserWindow, ipcMain, nativeTheme, Menu, Tray, nativeImage,
  clipboard, globalShortcut
} from 'electron';
import Store from 'electron-store';
import { join } from 'path'
import fs from "fs";
import icon from '../../build/icon.png?asset'
import Database from "better-sqlite3-multiple-ciphers";
import appIcon from './logo.png?asset';
import importBookmarksWorker from "./thread-scripts/import-bookmarks?nodeWorker";
import getBookmarksWorker from './thread-scripts/get-bookmarks?nodeWorker';
import * as cheerio from "cheerio";
import axios from "axios";
import { fromBuffer } from 'file-type-cjs-fix';
import { parseByString, IBaseMark } from "bookmark-file-parser";
import RssFeedParser from "rss-parser";
import clipboardLisner from "clipboard-event";
import "./index.d";

const APP_NAME = 'CleePIX';
const USER_DATA_PATH = app.getPath('userData');
const STORAGE_PATH = USER_DATA_PATH + '/storage/database';

const CleePIX: {

  Windows: {
    main?: BrowserWindow, forScraping: BrowserWindow | null,
    forScreenshot: BrowserWindow | null,
    feedreader: BrowserWindow | null, clipboard: BrowserWindow | null
  },
  storage: {[key: number]: {db?: Database.Database, stmt?: {[key: string]: Database.Database;};};},
  config: Store<storeConfig>, configTemp?: storeConfig,
  run: () => void, initializeDB: (storage: {label: string, id: number, path: string;}) => void,
  createWindowInstance: ( mode: 'main' | 'feedreader' | 'clipboard' ) => BrowserWindow,
  shareParts: {
    getInstanceDatabasePath: ( instanceId: number ) => string | null,
    getWebpageMetadata: ( url: string, isStatic?: boolean ) => Promise<{
      title: string, description: string, image: string | null
    } | null>,
    getDomScreenshot: ( url: string ) => Promise<Electron.NativeImage | undefined>,
    setMetadataAllBookmarks: ( instanceId: number ) => void
  }

} = {

  Windows: {
    forScraping: null, forScreenshot: null, feedreader: null, clipboard: null,
  }, storage: {},
  config: new Store<storeConfig>(/*{ encryptionKey: 'ymzkrk33' }*/),

  run: function () {

    //this.config.clear();
    if (this.config.size === 0) {
      this.config.store = {
        window: {
          main: { width: 1360, minWidth: 1100, height: 830, minHeight: 671, x: null, y: null, isMaximize: false },
          feedreader: { width: 1360, minWidth: 1100, height: 830, minHeight: 671, x: null, y: null, isMaximize: false },
          clipboard: { width: 400, minWidth: 400, height: 580, minHeight: 580, x: null, y: null, isMaximize: false, isFixation: false }
        },
        instance: [{
          label: 'default', id: 1,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }, {
          label: 'main', id: 2,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }],
        cache: {
          currentInstanceId: 1, tagTreeDomStrings: null, selectedTags: null
        }
      }
    }

    app.setName( APP_NAME );
    nativeTheme.themeSource = 'dark';

    this.configTemp = this.config.store;

    this.config.store.instance!.forEach(db => {
      this.initializeDB(db);
    });

    this.config.onDidAnyChange(() => {
      this.Windows.main?.webContents.send('config-update', this.config.store);
    });

    ipcMain.handle('get-config', () => {
      return this.config.store;
    });

    ipcMain.handle('import-bookmark-file', async (_, dataString) => {
      const bookmarks = parseByString(dataString.html);
      if (bookmarks.length > 0) {
        const dbPath = this.shareParts.getInstanceDatabasePath( dataString.instanceId );
        const result = await importBookmarks( dbPath, bookmarks );
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
    });

    ipcMain.handle('get-bookmarks', async (_, query) => {
      if ( query.tagIdChain !== null  ) {
        const dbPath = this.shareParts.getInstanceDatabasePath( query.instanceId );
        return await getBookmarks( dbPath, query.tagIdChain );
      }else {
        return this.storage[ query.instanceId ].db?.prepare(
          `SELECT * FROM bookmarks ORDER BY update_time DESC LIMIT 80`
        ).all();
      }

      async function getBookmarks( dbPath: string | null, tagIdChain: number[] ) {

        return new Promise<any[] | null>((resolve) => {
          getBookmarksWorker({
            workerData: { dbPath, tagIdChain }
          }).on('message', resolve);
        });
      }
    });

    ipcMain.handle('register-bookmark', (_, registerData) => {
      try {
        const bookmarkTable = this.storage[ registerData.instanceId ].db?.prepare(
          `INSERT INTO bookmarks( url, title, description, data, memo, thunb, thunb_mime ) VALUES( ?, ?, ?, ?, ?, ?, ? )`
        );
        const bookmarkTagsTable = this.storage[ registerData.instanceId ].db?.prepare(
          `INSERT INTO tags_bookmarks( tags_id, bookmark_id ) VALUES( ?, ? )`
        );

        const resultBookmark = bookmarkTable?.run(
          registerData.bookmark.url, registerData.bookmark.title,
          registerData.bookmark.description, registerData.bookmark.data,
          registerData.bookmark.memo, registerData.bookmark.thunb,
          registerData.bookmark.thunb_mime
        );

        if ( resultBookmark && resultBookmark.changes == 1 ) {
          for ( let tagId of registerData.tags ) {
            bookmarkTagsTable?.run( tagId, resultBookmark.lastInsertRowid );
          }
        }

        return true;
      } catch (e) { console.log(e); return false }
    });

    ipcMain.handle('remove-bookmark', (_, bk) => {
      try {
        return this.storage[ bk.instanceId ].db?.prepare(
          `DELETE FROM bookmarks WHERE id = ?`
        ).run( bk.bookmarkId );
      }catch (e) { console.log(e); return null }
    });

    ipcMain.handle('get-rss-feed', async (_, url) => {
      const parser = new RssFeedParser();
      try {
        const feed = await parser.parseURL( url );
        return feed;
      } catch (e) { return null }
    });

    ipcMain.on('window-close', () => {
      Object.values(this.storage).forEach(value => {
        value.db?.close();
      });
      app.quit();
    });

    ipcMain.on('window-maximize', (_, windowName) => {
      if (this.Windows[ windowName ]?.isMaximized()) {
        this.Windows[ windowName ]?.unmaximize();
      } else this.Windows[ windowName ]?.maximize();
    });

    ipcMain.on('window-minize', (_, windowName) => {
      this.Windows[ windowName ]?.minimize();
    });

    ipcMain.on('ite-name-update', (_, ite) => {
      this.config.store.instance!.forEach((i, index) => {
        if (i.id == ite.id) {
          this.configTemp!.instance![index].label = ite.name;
          this.config.store = this.configTemp!; return;
        }
      });
    });

    ipcMain.on('set-ite-id-cache', (_, id) => {
      this.configTemp!.cache!.currentInstanceId = id;
      this.config.set('cache', this.configTemp!.cache);
    });

    ipcMain.handle('set-tag-tree-cache', (_, cache) => {
      this.configTemp!.cache!.tagTreeDomStrings = cache ? cache.tagTreeCache : null;
      this.configTemp!.cache!.selectedTags = cache ? cache.selectedTags : null;
      this.config.set('cache', this.configTemp!.cache);
    });

    ipcMain.handle('add-instance', () => {
      this.configTemp!.instance = this.configTemp!.instance?.sort((a, b) => {
        return (a.id < b.id) ? -1 : 1;
      });

      const newId: number = this.configTemp!.instance!.slice(-1)[0].id + 1;
      const newInstance = { label: 'new instance', id: newId, path: STORAGE_PATH + `/ite_${randomString()}.db` };
      this.configTemp!.instance?.push(newInstance);
      this.initializeDB(newInstance);
      //this.config.store = this.configTemp!.
      this.config.set('instance', this.configTemp!.instance);

      return newInstance;
    });

    ipcMain.on('remove-instance', (_, id) => {
      let instancePath: string = '';
      let instanceId: number = 0;
      let indexTemp: number = 0;
      this.configTemp!.instance?.forEach((ite, index) => {
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
          this.configTemp!.instance?.splice(indexTemp, 1);
          this.config.set( 'instance', this.configTemp!.instance );
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

    ipcMain.handle('get-tags-in-bookmark', (_, bk) => {
      try {
        return this.storage[ bk.instanceId ].db?.prepare(
          `SELECT tags.* FROM tags
            JOIN tags_bookmarks AS tbt ON tags.id = tbt.tags_id
            WHERE tbt.bookmark_id = ?`
          ).all( bk.bookmarkId );
      }catch (e) { console.log(e); return null }
    });

    ipcMain.handle('get-site-metadata', async (_, url) => {
      return await this.shareParts.getWebpageMetadata( url );
    });

    ipcMain.handle('set-metadata-all-bookmarks', async (_, instanceId) => {
      this.shareParts.setMetadataAllBookmarks( instanceId ); return true;
    });

    ipcMain.handle('get-webpage-image', async (_, url) => {
      const buffer = await getWebImage( url );
      const mime = buffer ? await fromBuffer( buffer ) : null;
      if ( buffer && mime ) {
        return { data: buffer, mimeType: mime.mime };
      }else return null;
    });

    ipcMain.handle('get-dom-screenshot', async (_, url) => {
      const screenshot = await this.shareParts.getDomScreenshot( url );
      return screenshot!.toPNG();
    });

    ipcMain.handle('get-mimeType-fromBuffer', async (_, buffer) => {
      return await fromBuffer( buffer );
    });

    ipcMain.on('window-reload', () => {
      this.Windows.main?.webContents.reloadIgnoringCache();
    });

    ipcMain.on('open-dev-tool', () => {
      this.Windows.main?.webContents.openDevTools();
    });

    ipcMain.on('window-hide', (_, windowName) => {
      this.Windows[ windowName ]?.hide();
    });

    // ##############################################
    // クリップボードウィンドウ
    // ##############################################
    ipcMain.on('clipboard-win-open', () => {
      if ( !this.Windows.clipboard?.isVisible() ) {
        this.Windows.clipboard?.show();
      }
    });

    ipcMain.handle('clipboard-win-show-top', () => {
      if ( this.Windows.clipboard?.isAlwaysOnTop() ) {
        this.Windows.clipboard?.setAlwaysOnTop( false );
        this.configTemp!.window!.clipboard.isFixation = false;
        this.config.set('window', this.configTemp?.window); return false;
      } else {
        this.Windows.clipboard?.setAlwaysOnTop( true );
        this.configTemp!.window!.clipboard.isFixation = true;
        this.config.set('window', this.configTemp?.window); return true;
      }
    });

    ipcMain.handle('clipboard-read', () => {
      const formats = clipboard.availableFormats();
      if ( formats.length >= 0 ) {
        return [...clipboard.availableFormats().map((format) => {
          if ( format.indexOf('text/plain') >= 0 ) {
            return [ format, clipboard.readText() ];
          } else if ( format.indexOf('text/html') >= 0 ) {
            return [ format, clipboard.readHTML() ];
          } else if ( format.indexOf('text/rtf') >= 0 ) {
            return [ format, clipboard.readRTF() ];
          } else if ( format.indexOf('image/') >= 0 ) {
            return [ format, clipboard.readImage('clipboard').toDataURL() ];
          } else return;
        }).filter((clip) => {
          if ( clip ) {
            if ( clip[1] !== undefined ) return true; else return false;
          } else return false;
        })]
      } else return [];
    });

    ipcMain.on('clipboard-write', (_, writeData) => {
      clipboard.clear('clipboard');
      if ( writeData[0] === 'text/plain' ) {
        clipboard.writeText( writeData[1], 'clipboard' );
      } else if ( writeData[0] === 'text/html' ) {
        clipboard.writeHTML( writeData[1], 'clipboard' );
      } else if ( writeData[0] === 'text/rtf' ) {
        clipboard.writeRTF( writeData[1], 'clipboard' );
      } else if ( writeData[0].indexOf('image/') >= 0 ) {
        const image =nativeImage.createFromDataURL( writeData[1] );
        clipboard.writeImage( image, 'clipboard' );
      }
    });

    ipcMain.on('clip-hist-copy', (_, hist) => {
      const contextMenu = Menu.buildFromTemplate(
        [...hist.clips.map((clip) => {
          return { label: clip[0], click: () => {
            clipboard.clear('clipboard');
            if ( clip[0] === 'text/plain' ) {
              clipboard.writeText( clip[1], 'clipboard' );
            } else if ( clip[0] === 'text/html' ) {
              clipboard.writeHTML( clip[1], 'clipboard' );
            } else if ( clip[0] === 'text/rtf' ) {
              clipboard.writeRTF( clip[1], 'clipboard' );
            } else if ( clip[0].indexOf('image/') >= 0 ) {
              clipboard.writeImage( nativeImage.createFromDataURL( clip[1] ) );
            }
          }}
        })]
      );

      contextMenu.popup({ window: this.Windows!.clipboard!, x: hist.pos.x, y: hist.pos.y });
    });

    ipcMain.on('resize-aspect16/9-win', (_, toggle) => {
      if ( toggle ) {
        const width = Math.floor( ( this.Windows.clipboard?.getBounds().height! * 16 ) / 11 );
        this.Windows.clipboard?.setBounds( { width }, true );
      } else {
        const width = Math.floor( ( this.Windows.clipboard?.getBounds().height! * 20 ) / 29 );
        this.Windows.clipboard?.setBounds( { width }, true );
      }
    });

    // ##############################################
    // フィードリーダーウィンドウ
    // ##############################################
    ipcMain.on('feedreader-win-open', () => {
      if ( !this.Windows.feedreader?.isVisible() ) {
        this.Windows.feedreader?.show();
      }
    });

    // ##############################################
    // アプリ起動準備完了時の処理
    // ##############################################
    app.whenReady().then( () => {

      this.Windows.main = this.createWindowInstance('main');
      this.Windows.clipboard = this.createWindowInstance('clipboard');
      this.Windows.feedreader = this.createWindowInstance('feedreader');

      this.Windows.main?.on('ready-to-show', () => {
        this.Windows.main?.show();
      });

      if ( this.configTemp?.window?.clipboard.isFixation ) {
        this.Windows.clipboard?.setAlwaysOnTop( true );
      }

      const tray = new Tray(nativeImage.createFromPath( appIcon ));
      const contextMenu = Menu.buildFromTemplate([
        { id: '1', label: 'アプリを表示', type: 'normal', click: trayMenuHandler },
        { id: '2', label: 'フィードリーダー', type: 'normal', click: trayMenuHandler },
        { id: '3', label: 'クリップボード', type: 'normal', click: trayMenuHandler },
        { id: '4', label: '設定', type: 'normal', click: trayMenuHandler },
        { id: '5', label: '終了', type: 'normal', role: 'quit' }
      ]);
      tray.setToolTip('CleePIX');
      tray.setContextMenu(contextMenu);
      tray.on('click', () => {
        if ( !this.Windows.main?.isVisible() ) {
          this.Windows.main?.show(); 
        }
      });

      function trayMenuHandler( menu: Electron.MenuItem ) {
        switch ( menu.id ) {
          case '1':
            CleePIX.Windows.main?.show(); break;
          case '2':
            CleePIX.Windows.feedreader?.show(); break;
          case '3':
            CleePIX.Windows.clipboard?.show(); break;
          default:
            CleePIX.Windows.main?.show(); break;
        }
      }

      globalShortcut.register('CommandOrControl+Shift+C', () => {
        if ( this.Windows.main?.isVisible() ) {
          this.Windows.main?.hide();
        } else this.Windows.main?.show();
      });

      globalShortcut.register('CommandOrControl+Shift+A', () => {
        this.Windows.clipboard?.show();
      });

      this.Windows.clipboard.webContents.on('did-finish-load', () => {

        clipboardLisner.startListening();
        clipboardLisner.on('change', () => {
          this.Windows!.clipboard!.webContents.send('clipboard-change');
        });
      });

      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) CleePIX.createWindowInstance('main');
      });
    });

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        clipboardLisner.stopListening();
        globalShortcut.unregisterAll();
        app.quit()
      }
    });
  },

  shareParts: {

    getInstanceDatabasePath: function ( instanceId ) {

      let databasePath: string | null = null;
      CleePIX.config.store.instance!.forEach((ite) => {
        if ( ite.id === instanceId ) {
          databasePath = ite.path; return;
        }
      });
      return databasePath;
    },

    getWebpageMetadata: async function ( url, isStatic = true ) {

      return new Promise<{
        title: string, description: string, image: string | null
      } | null>( async (resolve) => {

        if ( isStatic ) {

          const html = await httpRequestString( url );
          if ( html ) {
            const parser = cheerio.load( html );
            let description = parser(`meta[property="og:description"]`).attr('content');
            if (description === undefined) description = parser(`meta[name="description"]`).attr('content');
            const image = parser(`meta[property='og:image']`).attr('content');
            resolve({
              title: parser('title').text(), description: description ? description : '',
              image: image ? image : null
            });
          }else resolve( null );

        }else {

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
            .executeJavaScript('[document.head.innerHTML, document.body.innerHTML]', true)
            .then( async ( dom ) => {
              const parser = cheerio.load( `<html><head>${ dom[0] }</head><body>${ dom[1] }</body></html>` )
              let description = parser(`meta[property="og:description"]`).attr('content');
              if (description === undefined) description = parser(`meta[name="description"]`).attr('content');
              const image = parser(`meta[property='og:image']`).attr('content');
              resolve({
                title: parser('title').text(), description: description ? description : '',
                image: image ? image : null
              });
            }).catch((e) => { console.log(e); resolve( null ) })
        }
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
        const allBookmarks = CleePIX.storage[ instanceId ].db?.prepare(`SELECT * FROM bookmarks WHERE thunb IS NULL`).all();
        const updateBookmarks = CleePIX.storage[ instanceId ].db
          ?.prepare(`UPDATE bookmarks SET description = ?, thunb = ?, thunb_mime = ? WHERE id = ?`);
        let count: number = 0;
        for ( const bookmark of allBookmarks! ) {
          console.log(bookmark.url);
          count++;
          console.log(count);
          const metadata = await this.getWebpageMetadata( bookmark.url );
          if ( metadata && metadata.image ) {
            const imageBuffer = await getWebImage( metadata.image );
            if ( imageBuffer ) {
              const type = await fromBuffer( imageBuffer! );
              updateBookmarks?.run(
                metadata.description, 
                type && type.mime.match(/^image\//) ? imageBuffer! : null,
                type && type.mime.match(/^image\//) ? type.mime : null, bookmark.id
              );
            }else useScreenshot( metadata, bookmark );
          }else if ( metadata && metadata.image === null ) {
            useScreenshot( metadata, bookmark );
          }
        }

        async function useScreenshot( metadata, bookmark ): Promise<void> {
          const image = await CleePIX.shareParts.getDomScreenshot( bookmark.url );
          updateBookmarks?.run(
            metadata.description, image ? image.toPNG() : null, 'image/png', bookmark.id
          );
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

      this.storage[storage.id].db!.prepare(
        `CREATE TABLE "rss_sources" (
          "id" INTEGER UNIQUE, "site_name" TEXT NOT NULL, "url" TEXT NOT NULL,
          "feed_url" TEXT NOT NULL, "thumb" BLOB, "thumb_mime" TEXT,
          "register_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          "update_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();

      this.storage[storage.id].db?.prepare(
        `CREATE INDEX bookmarks_index
          ON bookmarks( id, title, description, url, data, memo, update_time, register_time )`
        ).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX tags_index ON tags( id, name, update_time, register_time )`).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX tb_index ON tags_bookmarks( tags_id, bookmark_id )`).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX ts_index ON tags_structure( parent_id, child_id )`).run();
      this.storage[storage.id].db
        ?.prepare(`CREATE INDEX rs_index ON rss_sources( id, site_name, url, feed_url, register_time, update_time )`);
    }

    if ( !fs.existsSync(USER_DATA_PATH + '/storage') ) {
      fs.mkdirSync(USER_DATA_PATH + '/storage');
    }

    if (!fs.existsSync(STORAGE_PATH)) {
      fs.mkdir(STORAGE_PATH, (err) => {
        if (err === null) {initDB();}
      });
    } else initDB();

  },

  createWindowInstance: function ( mode ) {

    const windowConfig = <windowInitValues>this.configTemp!.window![ mode ];

    const window = new BrowserWindow({
      width: windowConfig.width, minWidth: windowConfig.minWidth,
      x: windowConfig.x ? windowConfig.x : undefined,
      height: windowConfig.height, minHeight: windowConfig.minHeight,
      y: windowConfig.y ? windowConfig.y : undefined,
      show: false, frame: false,
      autoHideMenuBar: true,
      backgroundColor: "black",
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false, webviewTag: true
      }
    });

    if ( mode === 'main' && this.configTemp?.window?.main.isMaximize ) window.maximize();

    window.on('moved', () => {
      const rect = window.getNormalBounds();
      this.configTemp!.window![ mode ].x = rect.x;
      this.configTemp!.window![ mode ].y = rect.y;
      this.config.set('window', this.configTemp!.window!);
    });

    window.on('maximize', () => {
      this.configTemp!.window![ mode ].isMaximize = true;
      this.config.set('window', this.configTemp!.window!);
    });

    window.on('unmaximize', () => {
      this.configTemp!.window![ mode ].isMaximize = false;
      this.config.set('window', this.configTemp!.window!);
    });

    window.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    let loadFile: string = '';
    switch ( mode ) {
      case 'feedreader':
        loadFile = '/feedreader.html'; break;
      case 'clipboard':
        loadFile = '/clipboard.html'; break;
      default:
        loadFile = '/index.html'; break;
    }

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
      window.loadURL( process.env['ELECTRON_RENDERER_URL'] + loadFile );
    } else {
      window.loadFile( join(__dirname, `../renderer${ loadFile }` ));
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

/*function getStrDatetime() {

  const date = new Date();

  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  const h = ('0' + date.getHours()).slice(-2);
  const mi = ('0' + date.getMinutes()).slice(-2);
  const s = ('0' + date.getSeconds()).slice(-2);

  return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;
}*/

async function getWebImage( url: string ): Promise<Buffer | null> {

  return new Promise((resolve) => {

    axios.get( url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
      },
      responseType: 'arraybuffer',
      timeout: 0
    }).then( async ( response ) => {
      resolve( Buffer.from( response.data ) );
    }).catch((err) => { console.log(err); resolve( null ) });
  });
}

async function httpRequestString( url: string ): Promise<string | null> {

  return new Promise<string | null>((resolve) => {

    axios.get( url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
      },
      responseType: 'text',
      timeout: 5000
    }).then( ( response ) => {
      resolve( response.data );
    }).catch((err) => { console.log(err); resolve( null ) });
  });
}

async function sleep( second: number ): Promise<void> {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, second);
  });
}

// App init
CleePIX.run();