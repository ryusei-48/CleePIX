"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
const electron = require("electron");
const Store = require("electron-store");
const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3-multiple-ciphers");
const node_worker_threads = require("node:worker_threads");
const cheerio = require("cheerio");
const axios = require("axios");
const fileTypeCjsFix = require("file-type-cjs-fix");
const bookmarkFileParser = require("bookmark-file-parser");
const RssFeedParser = require("rss-parser");
const clipboardLisner = require("clipboard-event");
const kuromoji = require("kuromoji");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const cheerio__namespace = /* @__PURE__ */ _interopNamespaceDefault(cheerio);
const icon = path.join(__dirname, "./chunks/icon-4363016c.png");
const appIcon = path.join(__dirname, "./chunks/logo-5802e1fb.png");
function importBookmarksWorker(options) {
  return new node_worker_threads.Worker(require.resolve("./import_bookmarks.js"), options);
}
function getBookmarksWorker(options) {
  return new node_worker_threads.Worker(require.resolve("./get_bookmarks.js"), options);
}
function clipHistorySearch(options) {
  return new node_worker_threads.Worker(require.resolve("./clip_history_search.js"), options);
}
const APP_NAME = "CleePIX";
const USER_DATA_PATH = electron.app.getPath("userData");
const STORAGE_PATH = USER_DATA_PATH + "/storage/database";
const CleePIX = {
  Windows: {
    forScraping: null,
    forScreenshot: null,
    feedreader: null,
    clipboard: null
  },
  storage: {},
  extraStorage: { stmt: {} },
  config: new Store(
    /*{ encryptionKey: 'ymzkrk33' }*/
  ),
  run: function() {
    if (this.config.size === 0) {
      this.config.store = {
        window: {
          main: { width: 1360, minWidth: 1100, height: 830, minHeight: 671, x: null, y: null, isMaximize: false },
          feedreader: { width: 1360, minWidth: 1100, height: 830, minHeight: 671, x: null, y: null, isMaximize: false },
          clipboard: { width: 400, minWidth: 400, height: 580, minHeight: 580, x: null, y: null, isMaximize: false, isFixation: false }
        },
        instance: [{
          label: "default",
          id: 1,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }, {
          label: "main",
          id: 2,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }],
        cache: {
          currentInstanceId: 1,
          tagTreeDomStrings: null,
          selectedTags: null
        }
      };
    }
    electron.app.setName(APP_NAME);
    electron.nativeTheme.themeSource = "dark";
    this.configTemp = this.config.store;
    this.config.store.instance.forEach((db) => {
      this.initializeDB(db);
    });
    this.initializeExtraDB();
    this.config.onDidAnyChange(() => {
      this.Windows.main?.webContents.send("config-update", this.config.store);
    });
    electron.ipcMain.handle("get-config", () => {
      return this.config.store;
    });
    kuromoji.builder({ dicPath: path.join(require.resolve("kuromoji"), "../../dict") }).build((err, tokenizer) => {
      if (err)
        return;
      this.textAnalyzer = tokenizer;
    });
    electron.ipcMain.handle("import-bookmark-file", async (_, dataString) => {
      const bookmarks = bookmarkFileParser.parseByString(dataString.html);
      if (bookmarks.length > 0) {
        const dbPath = this.shareParts.getInstanceDatabasePath(dataString.instanceId);
        const result = await importBookmarks(dbPath, bookmarks);
        this.shareParts.setMetadataAllBookmarks(dataString.instanceId);
        return result;
      } else
        return false;
      async function importBookmarks(databasePath, bookmarks2) {
        return new Promise(async (resolve) => {
          if (databasePath) {
            importBookmarksWorker({
              workerData: { dbPath: databasePath, bookmarks: bookmarks2 }
            }).on("message", resolve);
          } else
            resolve(false);
        });
      }
    });
    electron.ipcMain.handle("get-bookmarks", async (_, query) => {
      if (query.tagIdChain !== null) {
        const dbPath = this.shareParts.getInstanceDatabasePath(query.instanceId);
        return await getBookmarks(dbPath, query.tagIdChain);
      } else {
        return this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM bookmarks ORDER BY update_time DESC LIMIT 80`
        ).all();
      }
      async function getBookmarks(dbPath, tagIdChain) {
        return new Promise((resolve) => {
          getBookmarksWorker({
            workerData: { dbPath, tagIdChain }
          }).on("message", resolve);
        });
      }
    });
    electron.ipcMain.handle("register-bookmark", (_, registerData) => {
      try {
        const bookmarkTable = this.storage[registerData.instanceId].db?.prepare(
          `INSERT INTO bookmarks( url, title, description, data, memo, thunb, thunb_mime ) VALUES( ?, ?, ?, ?, ?, ?, ? )`
        );
        const bookmarkTagsTable = this.storage[registerData.instanceId].db?.prepare(
          `INSERT INTO tags_bookmarks( tags_id, bookmark_id ) VALUES( ?, ? )`
        );
        const resultBookmark = bookmarkTable?.run(
          registerData.bookmark.url,
          registerData.bookmark.title,
          registerData.bookmark.description,
          registerData.bookmark.data,
          registerData.bookmark.memo,
          registerData.bookmark.thunb,
          registerData.bookmark.thunb_mime
        );
        if (resultBookmark && resultBookmark.changes == 1) {
          for (let tagId of registerData.tags) {
            bookmarkTagsTable?.run(tagId, resultBookmark.lastInsertRowid);
          }
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    });
    electron.ipcMain.handle("remove-bookmark", (_, bk) => {
      try {
        return this.storage[bk.instanceId].db?.prepare(
          `DELETE FROM bookmarks WHERE id = ?`
        ).run(bk.bookmarkId);
      } catch (e) {
        console.log(e);
        return null;
      }
    });
    electron.ipcMain.handle("get-rss-feed", async (_, url) => {
      const parser = new RssFeedParser();
      try {
        const feed = await parser.parseURL(url);
        return feed;
      } catch (e) {
        return null;
      }
    });
    electron.ipcMain.on("window-close", () => {
      Object.values(this.storage).forEach((value) => {
        value.db?.close();
      });
      this.extraStorage.db?.close();
      clipboardLisner.stopListening();
      electron.globalShortcut.unregisterAll();
      electron.app.quit();
    });
    electron.ipcMain.on("window-maximize", (_, windowName) => {
      if (this.Windows[windowName]?.isMaximized()) {
        this.Windows[windowName]?.unmaximize();
      } else
        this.Windows[windowName]?.maximize();
    });
    electron.ipcMain.on("window-minize", (_, windowName) => {
      this.Windows[windowName]?.minimize();
    });
    electron.ipcMain.on("ite-name-update", (_, ite) => {
      this.config.store.instance.forEach((i, index) => {
        if (i.id == ite.id) {
          this.configTemp.instance[index].label = ite.name;
          this.config.store = this.configTemp;
          return;
        }
      });
    });
    electron.ipcMain.on("set-ite-id-cache", (_, id) => {
      this.configTemp.cache.currentInstanceId = id;
      this.config.set("cache", this.configTemp.cache);
    });
    electron.ipcMain.handle("set-tag-tree-cache", (_, cache) => {
      this.configTemp.cache.tagTreeDomStrings = cache ? cache.tagTreeCache : null;
      this.configTemp.cache.selectedTags = cache ? cache.selectedTags : null;
      this.config.set("cache", this.configTemp.cache);
    });
    electron.ipcMain.handle("add-instance", () => {
      this.configTemp.instance = this.configTemp.instance?.sort((a, b) => {
        return a.id < b.id ? -1 : 1;
      });
      const newId = this.configTemp.instance.slice(-1)[0].id + 1;
      const newInstance = { label: "new instance", id: newId, path: STORAGE_PATH + `/ite_${randomString()}.db` };
      this.configTemp.instance?.push(newInstance);
      this.initializeDB(newInstance);
      this.config.set("instance", this.configTemp.instance);
      return newInstance;
    });
    electron.ipcMain.on("remove-instance", (_, id) => {
      let instancePath = "";
      let instanceId = 0;
      let indexTemp = 0;
      this.configTemp.instance?.forEach((ite, index) => {
        if (ite.id === id) {
          indexTemp = index;
          instanceId = ite.id;
          instancePath = ite.path;
          return;
        }
      });
      this.storage[instanceId].db?.close();
      fs.unlink(instancePath, (e) => {
        if (e === null) {
          delete this.storage[instanceId];
          this.configTemp.instance?.splice(indexTemp, 1);
          this.config.set("instance", this.configTemp.instance);
        }
      });
    });
    electron.ipcMain.handle("get-add-tag-list", async (_, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      ).all(query.keyword + "%");
    });
    electron.ipcMain.handle("add-tag-suggest", (_, query) => {
      return this.storage[query.id].db?.prepare(
        `SELECT * FROM tags WHERE name LIKE ?`
      ).get(query.value + "%");
    });
    electron.ipcMain.handle("add-tag", (_, query) => {
      let res = null;
      let child_id = 0;
      try {
        res = this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM tags WHERE name = ?`
        ).get(query.name);
        child_id = res === void 0 ? 0 : res.id;
        if (res === void 0) {
          res = this.storage[query.instanceId].db.prepare(
            `INSERT INTO tags (name) VALUES ( ? )`
          ).run(query.name);
          child_id = res.lastInsertRowid;
        }
        this.storage[query.instanceId].db.prepare(
          `INSERT INTO tags_structure (parent_id, child_id) VALUES ( ?, ? )`
        ).run(query.parentTagId !== null ? query.parentTagId : 0, child_id);
        return res;
      } catch (e) {
        console.log(e);
        return null;
      }
    });
    electron.ipcMain.handle("update-tag-name", (_, query) => {
      let res = null;
      try {
        res = this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM tags WHERE name = ?`
        ).get(query.name);
        if (res === void 0) {
          res = this.storage[query.instanceId].db.prepare(
            `UPDATE tags SET name = ? WHERE id = ?`
          ).run(query.name, query.tagId);
        }
        return res;
      } catch (e) {
        console.log(e);
        return null;
      }
    });
    electron.ipcMain.handle("get-tag-tree", async (_, id) => {
      let res, editres = [];
      try {
        res = this.storage[id].db?.prepare(`SELECT * FROM tags`).all();
        const isParentQuery = this.storage[id].db?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
        const isHit = isParentQuery?.all(0);
        res.forEach((tag) => {
          isHit.forEach((hit) => {
            if (tag.id === hit.child_id) {
              editres.push(tag);
            }
          });
        });
      } catch (e) {
        res = null;
      }
      return editres;
    });
    electron.ipcMain.handle("get-sub-tags", (_, res) => {
      const tagsStructure = this.storage[res.instanceId].db?.prepare(`SELECT * FROM tags_structure WHERE parent_id = ?`);
      const tags = this.storage[res.instanceId].db?.prepare(`SELECT * FROM tags WHERE id = ?`);
      const tagsRes = [];
      tagsStructure?.all(res.parentId).forEach((structure) => {
        tagsRes.push(tags?.get(structure.child_id));
      });
      return tagsRes;
    });
    electron.ipcMain.handle("update-tag-structure", (_, structure) => {
      try {
        const delRes = this.storage[structure.instanceId].db.prepare(
          `DELETE FROM tags_structure WHERE parent_id = ? AND child_id = ?`
        ).run(structure.delete.parentId, structure.delete.childId);
        const setRes = this.storage[structure.instanceId].db.prepare(
          `INSERT INTO tags_structure (parent_id, child_id) VALUES ( ?, ? )`
        ).run(structure.set.parentId, structure.set.childId);
        if (delRes.changes === 1 && setRes.changes === 1) {
          return true;
        } else
          return false;
      } catch (e) {
        console.log(e);
        return false;
      }
    });
    electron.ipcMain.handle("get-tags-in-bookmark", (_, bk) => {
      try {
        return this.storage[bk.instanceId].db?.prepare(
          `SELECT tags.* FROM tags
            JOIN tags_bookmarks AS tbt ON tags.id = tbt.tags_id
            WHERE tbt.bookmark_id = ?`
        ).all(bk.bookmarkId);
      } catch (e) {
        console.log(e);
        return null;
      }
    });
    electron.ipcMain.handle("get-site-metadata", async (_, url) => {
      return await this.shareParts.getWebpageMetadata(url);
    });
    electron.ipcMain.handle("set-metadata-all-bookmarks", async (_, instanceId) => {
      this.shareParts.setMetadataAllBookmarks(instanceId);
      return true;
    });
    electron.ipcMain.handle("get-webpage-image", async (_, url) => {
      const buffer = await getWebImage(url);
      const mime = buffer ? await fileTypeCjsFix.fromBuffer(buffer) : null;
      if (buffer && mime) {
        return { data: buffer, mimeType: mime.mime };
      } else
        return null;
    });
    electron.ipcMain.handle("get-dom-screenshot", async (_, url) => {
      const screenshot = await this.shareParts.getDomScreenshot(url);
      return screenshot.toPNG();
    });
    electron.ipcMain.handle("get-mimeType-fromBuffer", async (_, buffer) => {
      return await fileTypeCjsFix.fromBuffer(buffer);
    });
    electron.ipcMain.on("window-reload", () => {
      this.Windows.main?.webContents.reloadIgnoringCache();
    });
    electron.ipcMain.on("open-dev-tool", () => {
      this.Windows.main?.webContents.openDevTools();
    });
    electron.ipcMain.on("window-hide", (_, windowName) => {
      this.Windows[windowName]?.hide();
    });
    let clipboardPasteTime = 0;
    const insertClipFunc = (clip, mode = 0) => {
      const insertClips = { text: null, html: null, rtf: null, image: null };
      clip.forEach((type) => {
        if (type[0] === "text/plain")
          insertClips.text = type[1];
        else if (type[0] === "text/html")
          insertClips.html = type[1];
        else if (type[0] === "text/rtf")
          insertClips.rtf = type[1];
        else if (type[0].indexOf("image/") >= 0)
          insertClips.image = type[1];
      });
      switch (mode) {
        case 0:
          const result = this.extraStorage.stmt.insertHistory?.run(
            insertClips.text,
            insertClips.html,
            insertClips.rtf,
            insertClips.image
          );
          if (result && result?.changes > 0) {
            return this.extraStorage.stmt.insertHistoryIndex?.run(
              result.lastInsertRowid,
              insertClips.text ? this.shareParts.separateTextGenerator(insertClips.text, false) : null
            );
          }
        case 1:
          return this.extraStorage.stmt.insertHistorySaved?.run(
            insertClips.text,
            insertClips.html,
            insertClips.rtf,
            insertClips.image
          );
        default:
          return void 0;
      }
    };
    electron.ipcMain.on("clipboard-win-open", () => {
      if (!this.Windows.clipboard?.isVisible()) {
        this.Windows.clipboard?.show();
      }
    });
    electron.ipcMain.handle("clipboard-win-show-top", () => {
      if (this.Windows.clipboard?.isAlwaysOnTop()) {
        this.Windows.clipboard?.setAlwaysOnTop(false);
        this.configTemp.window.clipboard.isFixation = false;
        this.config.set("window", this.configTemp?.window);
        return false;
      } else {
        this.Windows.clipboard?.setAlwaysOnTop(true);
        this.configTemp.window.clipboard.isFixation = true;
        this.config.set("window", this.configTemp?.window);
        return true;
      }
    });
    electron.ipcMain.handle("clipboard-read", () => {
      const formats = electron.clipboard.availableFormats();
      if (formats.length >= 0) {
        return [...electron.clipboard.availableFormats().map((format) => {
          if (format.indexOf("text/plain") >= 0) {
            return [format, electron.clipboard.readText()];
          } else if (format.indexOf("text/html") >= 0) {
            return [format, electron.clipboard.readHTML()];
          } else if (format.indexOf("text/rtf") >= 0) {
            return [format, electron.clipboard.readRTF()];
          } else if (format.indexOf("image/") >= 0) {
            return [format, electron.clipboard.readImage("clipboard").toDataURL()];
          } else
            return;
        }).filter((clip) => {
          if (clip) {
            if (clip[1] !== void 0)
              return true;
            else
              return false;
          } else
            return false;
        })];
      } else
        return [];
    });
    electron.ipcMain.on("clipboard-write", (_, writeData) => {
      electron.clipboard.clear("clipboard");
      if (writeData[0] === "text/plain") {
        electron.clipboard.writeText(writeData[1], "clipboard");
      } else if (writeData[0] === "text/html") {
        electron.clipboard.writeHTML(writeData[1], "clipboard");
      } else if (writeData[0] === "text/rtf") {
        electron.clipboard.writeRTF(writeData[1], "clipboard");
      } else if (writeData[0].indexOf("image/") >= 0) {
        const image = electron.nativeImage.createFromDataURL(writeData[1]);
        electron.clipboard.writeImage(image, "clipboard");
      }
    });
    electron.ipcMain.handle("update-clipboard-write-time", () => {
      clipboardPasteTime = Date.now();
      return clipboardPasteTime;
    });
    electron.ipcMain.on("clip-hist-copy", (_, hist) => {
      const contextMenu = electron.Menu.buildFromTemplate(
        [...hist.clips.map((clip) => {
          return { label: `コピー [${clip[0]}]`, click: () => {
            electron.clipboard.clear("clipboard");
            if (clip[0] === "text/plain") {
              electron.clipboard.writeText(clip[1], "clipboard");
            } else if (clip[0] === "text/html") {
              electron.clipboard.writeHTML(clip[1], "clipboard");
            } else if (clip[0] === "text/rtf") {
              electron.clipboard.writeRTF(clip[1], "clipboard");
            } else if (clip[0].indexOf("image/") >= 0) {
              electron.clipboard.writeImage(electron.nativeImage.createFromDataURL(clip[1]));
            }
          } };
        }), ...hist.type === "history" ? [{ label: "一時保存", click: () => {
          const insertResult = insertClipFunc(hist.clips, 1);
          if (insertResult && insertResult.changes === 1) {
            this.Windows.clipboard?.webContents.send("update-clipboard-saved", {
              insertId: insertResult.lastInsertRowid,
              clips: hist.clips
            });
          }
        } }, { label: "削除", click: () => {
          const deleteResult = this.extraStorage.stmt.deleteHistoryRecord?.run(hist.rowId);
          if (deleteResult && deleteResult.changes === 1) {
            this.Windows.clipboard?.webContents.send("deleted-record", { type: "history", rowId: hist.rowId });
          }
        } }] : hist.type === "tmp" ? [{ label: "削除", click: () => {
          const deleteResult = this.extraStorage.stmt.deleteSavedRecord?.run(hist.rowId);
          if (deleteResult && deleteResult.changes === 1) {
            this.Windows.clipboard?.webContents.send("deleted-record", { type: "tmp", rowId: hist.rowId });
          }
        } }] : []]
      );
      contextMenu.popup({ window: this.Windows.clipboard, x: hist.pos.x, y: hist.pos.y });
    });
    electron.ipcMain.on("resize-aspect16/9-win", (_, toggle) => {
      if (toggle) {
        const width = Math.floor(this.Windows.clipboard?.getBounds().height * 16 / 11);
        this.Windows.clipboard?.setBounds({ width }, true);
      } else {
        const width = Math.floor(this.Windows.clipboard?.getBounds().height * 20 / 29);
        this.Windows.clipboard?.setBounds({ width }, true);
      }
    });
    electron.ipcMain.handle("clipboard-insert-db", (_, hist) => {
      const result = insertClipFunc(hist);
      if (result && result.changes === 1) {
        return result.lastInsertRowid;
      } else
        return null;
    });
    electron.ipcMain.handle("get-clipboard", (_, arg) => {
      if (arg.type === "history") {
        return this.extraStorage.stmt.selectHistoryFirst?.all(arg.offset, 60);
      } else if (arg.type === "tmp") {
        return this.extraStorage.stmt.selectHistorySaved?.all(arg.offset, 60);
      } else
        return [];
    });
    electron.ipcMain.handle("clip-history-search", async (_, query) => {
      return await new Promise((resolve) => {
        clipHistorySearch({
          workerData: {
            dbPath: STORAGE_PATH + "/extra_data.db",
            image: query.image,
            query: this.shareParts.separateTextGenerator(query.string, true) || "",
            startDate: query.startDate,
            endDate: query.endDate,
            offset: query.offset
          }
        }).on("message", (clips) => resolve(clips));
      });
    });
    electron.ipcMain.handle("clipboard-saved-all-delete", async () => {
      const result = await electron.dialog.showMessageBox(this.Windows.clipboard, {
        type: "question",
        buttons: ["はい", "いいえ"],
        defaultId: 0,
        title: "一時保存されたデータの削除",
        message: "一時保存済みクリップボードデータを全て削除",
        detail: "一時保存済みクリップボードデータを全て削除してもよろしいですか？"
      });
      if (result.response === 0) {
        const result2 = this.extraStorage.db?.prepare(`DELETE FROM clipboard_saved`).run();
        if (result2 && result2.changes > 0)
          return true;
      }
      return false;
    });
    electron.ipcMain.handle("clipboard-history-all-delete", async () => {
      const result = await electron.dialog.showMessageBox(this.Windows.clipboard, {
        type: "question",
        buttons: ["はい", "いいえ"],
        defaultId: 0,
        title: "履歴の削除",
        message: "保存された全ての履歴を削除",
        detail: "保存された全ての履歴を削除してもよろしいですか？"
      });
      if (result.response === 0) {
        const result2 = this.extraStorage.db?.prepare(`DELETE FROM clipboard_history`).run();
        if (result2 && result2.changes > 0)
          return true;
      }
      return false;
    });
    electron.ipcMain.on("feedreader-win-open", () => {
      if (!this.Windows.feedreader?.isVisible()) {
        this.Windows.feedreader?.show();
      }
    });
    electron.app.whenReady().then(() => {
      this.Windows.main = this.createWindowInstance("main");
      this.Windows.clipboard = this.createWindowInstance("clipboard");
      this.Windows.feedreader = this.createWindowInstance("feedreader");
      this.Windows.main?.on("ready-to-show", () => {
        this.Windows.main?.show();
      });
      if (this.configTemp?.window?.clipboard.isFixation) {
        this.Windows.clipboard?.setAlwaysOnTop(true);
      }
      const tray = new electron.Tray(electron.nativeImage.createFromPath(appIcon));
      const contextMenu = electron.Menu.buildFromTemplate([
        { id: "1", label: "アプリを表示", type: "normal", click: trayMenuHandler },
        { id: "2", label: "フィードリーダー", type: "normal", click: trayMenuHandler },
        { id: "3", label: "クリップボード", type: "normal", click: trayMenuHandler },
        { id: "4", label: "設定", type: "normal", click: trayMenuHandler },
        { id: "5", label: "終了", type: "normal", role: "quit" }
      ]);
      tray.setToolTip("CleePIX");
      tray.setContextMenu(contextMenu);
      tray.on("click", () => {
        if (!this.Windows.main?.isVisible()) {
          this.Windows.main?.show();
        }
      });
      function trayMenuHandler(menu) {
        switch (menu.id) {
          case "1":
            CleePIX.Windows.main?.show();
            break;
          case "2":
            CleePIX.Windows.feedreader?.show();
            break;
          case "3":
            CleePIX.Windows.clipboard?.show();
            break;
          default:
            CleePIX.Windows.main?.show();
            break;
        }
      }
      electron.globalShortcut.register("CommandOrControl+Shift+C", () => {
        if (this.Windows.main?.isVisible()) {
          this.Windows.main?.hide();
        } else
          this.Windows.main?.show();
      });
      electron.globalShortcut.register("CommandOrControl+Shift+A", () => {
        this.Windows.clipboard?.show();
      });
      this.Windows.clipboard.webContents.on("did-finish-load", () => {
        clipboardLisner.startListening();
        clipboardLisner.on("change", () => {
          if (Date.now() - clipboardPasteTime > 600) {
            this.Windows.clipboard.webContents.send("clipboard-change");
          }
        });
      });
    });
  },
  shareParts: {
    getInstanceDatabasePath: function(instanceId) {
      let databasePath = null;
      CleePIX.config.store.instance.forEach((ite) => {
        if (ite.id === instanceId) {
          databasePath = ite.path;
          return;
        }
      });
      return databasePath;
    },
    getWebpageMetadata: async function(url, isStatic = true) {
      return new Promise(async (resolve) => {
        if (isStatic) {
          const html = await httpRequestString(url);
          if (html) {
            const parser = cheerio__namespace.load(html);
            let description = parser(`meta[property="og:description"]`).attr("content");
            if (description === void 0)
              description = parser(`meta[name="description"]`).attr("content");
            const image = parser(`meta[property='og:image']`).attr("content");
            resolve({
              title: parser("title").text(),
              description: description ? description : "",
              image: image ? image : null
            });
          } else
            resolve(null);
        } else {
          if (CleePIX.Windows.forScraping === null) {
            CleePIX.Windows.forScraping = new electron.BrowserWindow({
              width: 1360,
              height: 830,
              show: false,
              frame: true,
              autoHideMenuBar: true,
              backgroundColor: "#0f0f0f"
            });
          }
          CleePIX.Windows.forScraping.webContents.audioMuted = true;
          try {
            if (url.match(/^(https|http):\/\/.*/)) {
              await CleePIX.Windows.forScraping.loadURL(url).catch(() => {
                return;
              });
            } else
              resolve(null);
          } catch (e) {
            console.log(e);
            resolve(null);
          }
          CleePIX.Windows.forScraping?.webContents.executeJavaScript("[document.head.innerHTML, document.body.innerHTML]", true).then(async (dom) => {
            const parser = cheerio__namespace.load(`<html><head>${dom[0]}</head><body>${dom[1]}</body></html>`);
            let description = parser(`meta[property="og:description"]`).attr("content");
            if (description === void 0)
              description = parser(`meta[name="description"]`).attr("content");
            const image = parser(`meta[property='og:image']`).attr("content");
            resolve({
              title: parser("title").text(),
              description: description ? description : "",
              image: image ? image : null
            });
          }).catch((e) => {
            console.log(e);
            resolve(null);
          });
        }
      });
    },
    getDomScreenshot: async function(url) {
      if (CleePIX.Windows.forScreenshot === null) {
        CleePIX.Windows.forScreenshot = new electron.BrowserWindow({
          width: 1360,
          height: 830,
          show: false,
          frame: true,
          autoHideMenuBar: true,
          backgroundColor: "#0f0f0f"
        });
      }
      CleePIX.Windows.forScreenshot.webContents.audioMuted = true;
      try {
        if (url.match(/^(https|http):\/\/.*/)) {
          await CleePIX.Windows.forScreenshot?.loadURL(url).catch(() => {
            return;
          });
        } else
          return void 0;
      } catch (e) {
        console.log(e);
        return void 0;
      }
      const rect = CleePIX.Windows.forScreenshot?.getBounds();
      rect.x = 0;
      rect.y = 0;
      return await CleePIX.Windows.forScreenshot?.webContents.capturePage(rect, { stayHidden: true });
    },
    setMetadataAllBookmarks: async function(instanceId) {
      try {
        const allBookmarks = CleePIX.storage[instanceId].db?.prepare(`SELECT * FROM bookmarks WHERE thunb IS NULL`).all();
        const updateBookmarks = CleePIX.storage[instanceId].db?.prepare(`UPDATE bookmarks SET description = ?, thunb = ?, thunb_mime = ? WHERE id = ?`);
        let count = 0;
        for (const bookmark of allBookmarks) {
          console.log(bookmark.url);
          count++;
          console.log(count);
          const metadata = await this.getWebpageMetadata(bookmark.url);
          if (metadata && metadata.image) {
            const imageBuffer = await getWebImage(metadata.image);
            if (imageBuffer) {
              const type = await fileTypeCjsFix.fromBuffer(imageBuffer);
              updateBookmarks?.run(
                metadata.description,
                type && type.mime.match(/^image\//) ? imageBuffer : null,
                type && type.mime.match(/^image\//) ? type.mime : null,
                bookmark.id
              );
            } else
              useScreenshot(metadata, bookmark);
          } else if (metadata && metadata.image === null) {
            useScreenshot(metadata, bookmark);
          }
        }
        async function useScreenshot(metadata, bookmark) {
          const image = await CleePIX.shareParts.getDomScreenshot(bookmark.url);
          updateBookmarks?.run(
            metadata.description,
            image ? image.toPNG() : null,
            "image/png",
            bookmark.id
          );
        }
      } catch (e) {
        console.log(e);
      }
    },
    separateTextGenerator: function(text, isQuery) {
      const textResult = CleePIX.textAnalyzer?.tokenize(text).map((word) => word.surface_form + (isQuery ? "*" : ""));
      if (isQuery) {
        return textResult?.filter((word) => word.match(/^\s\*$/) === null);
      } else
        return textResult?.join(" ");
    }
  },
  initializeDB: function(storage) {
    this.storage[storage.id] = {};
    this.storage[storage.id].stmt = {};
    if (fs.existsSync(STORAGE_PATH) && fs.existsSync(storage.path)) {
      this.storage[storage.id].db = new Database(storage.path);
      return;
    }
    const initDB = () => {
      this.storage[storage.id].db = new Database(storage.path);
      this.storage[storage.id].db?.pragma("journal_mode = WAL");
      this.storage[storage.id].db.prepare(
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
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "tags" (
          "id"	INTEGER UNIQUE, "name"  TEXT NOT NULL UNIQUE,
          "font_color"	TEXT NOT NULL DEFAULT '#c6c4be',
          "bg_color"	TEXT NOT NULL DEFAULT 'gray',
          "register_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          "update_time"	TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "tags_bookmarks" (
          "tags_id"	INTEGER NOT NULL, "bookmark_id"	INTEGER NOT NULL,
          FOREIGN KEY("bookmark_id") REFERENCES "bookmarks"("id") on delete cascade,
          FOREIGN KEY("tags_id") REFERENCES "tags"("id") on delete cascade,
          PRIMARY KEY("tags_id","bookmark_id")
        )`
      ).run();
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "tags_structure" (
          "parent_id"	INTEGER NOT NULL, "child_id"	INTEGER NOT NULL,
          FOREIGN KEY("child_id") REFERENCES "tags"("id") ON DELETE CASCADE,
          PRIMARY KEY("parent_id", "child_id")
        )`
      ).run();
      this.storage[storage.id].db.prepare(
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
      this.storage[storage.id].db?.prepare(`CREATE INDEX tags_index ON tags( id, name, update_time, register_time )`).run();
      this.storage[storage.id].db?.prepare(`CREATE INDEX tb_index ON tags_bookmarks( tags_id, bookmark_id )`).run();
      this.storage[storage.id].db?.prepare(`CREATE INDEX ts_index ON tags_structure( parent_id, child_id )`).run();
      this.storage[storage.id].db?.prepare(`CREATE INDEX rs_index ON rss_sources( id, site_name, url, feed_url, register_time, update_time )`);
    };
    if (!fs.existsSync(USER_DATA_PATH + "/storage")) {
      fs.mkdirSync(USER_DATA_PATH + "/storage");
    }
    if (!fs.existsSync(STORAGE_PATH)) {
      fs.mkdir(STORAGE_PATH, (err) => {
        if (err === null) {
          initDB();
        }
      });
    } else
      initDB();
  },
  initializeExtraDB: function() {
    if (fs.existsSync(STORAGE_PATH + "/extra_data.db")) {
      this.extraStorage.db = new Database(STORAGE_PATH + "/extra_data.db");
    } else {
      this.extraStorage.db = new Database(STORAGE_PATH + "/extra_data.db");
      this.extraStorage.db.pragma("journal_mode = WAL");
      this.extraStorage.db.prepare(
        `CREATE TABLE "clipboard_history" (
          "id" INTEGER UNIQUE, "text" TEXT, "html" TEXT, "rtf" TEXT,
          "image" TEXT, "register_time" TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();
      this.extraStorage.db.prepare(
        `CREATE TABLE "clipboard_saved" (
          "id" INTEGER UNIQUE, "text" TEXT, "html" TEXT, "rtf" TEXT,
          "image" TEXT, "register_time" TIMESTAMP NOT NULL DEFAULT (DATETIME('now','localtime')),
          PRIMARY KEY("id" AUTOINCREMENT)
        )`
      ).run();
      this.extraStorage.db.prepare(
        `CREATE INDEX clipboard_history_update_time_index ON clipboard_history( register_time )`
      ).run();
      this.extraStorage.db.prepare(
        `CREATE VIRTUAL TABLE clipboard_history_index USING FTS5( clip, tokenize=porter )`
      ).run();
      this.extraStorage.db.prepare(
        `CREATE TRIGGER update_clipboard_history_index_after_delete AFTER DELETE ON clipboard_history
          BEGIN
            DELETE FROM clipboard_history_index WHERE rowid = old.id;
          END`
      ).run();
    }
    this.extraStorage.stmt.insertHistory = this.extraStorage.db.prepare(
      `INSERT INTO clipboard_history ( text, html, rtf, image ) VALUES ( ?, ?, ?, ? )`
    );
    this.extraStorage.stmt.insertHistorySaved = this.extraStorage.db.prepare(
      `INSERT INTO clipboard_saved ( text, html, rtf, image ) VALUES ( ?, ?, ?, ? )`
    );
    this.extraStorage.stmt.selectHistoryFirst = this.extraStorage.db.prepare(
      `SELECT * FROM clipboard_history ORDER BY register_time ASC LIMIT ?, ?`
    );
    this.extraStorage.stmt.selectHistorySaved = this.extraStorage.db.prepare(
      `SELECT * FROM clipboard_saved ORDER BY register_time ASC LIMIT ?, ?`
    );
    this.extraStorage.stmt.deleteHistoryRecord = this.extraStorage.db.prepare(
      `DELETE FROM clipboard_history WHERE id = ?`
    );
    this.extraStorage.stmt.deleteSavedRecord = this.extraStorage.db.prepare(
      `DELETE FROM clipboard_saved WHERE id = ?`
    );
    this.extraStorage.stmt.insertHistoryIndex = this.extraStorage.db.prepare(
      `INSERT INTO clipboard_history_index( rowid, clip ) VALUES( ?, ? )`
    );
  },
  createWindowInstance: function(mode) {
    const windowConfig = this.configTemp.window[mode];
    const window = new electron.BrowserWindow({
      width: windowConfig.width,
      minWidth: windowConfig.minWidth,
      x: windowConfig.x ? windowConfig.x : void 0,
      height: windowConfig.height,
      minHeight: windowConfig.minHeight,
      y: windowConfig.y ? windowConfig.y : void 0,
      show: false,
      frame: false,
      autoHideMenuBar: true,
      backgroundColor: "black",
      ...process.platform === "linux" ? { icon } : {},
      webPreferences: {
        preload: path.join(__dirname, "../preload/index.js"),
        sandbox: false,
        webviewTag: true
      }
    });
    if (mode === "main" && this.configTemp?.window?.main.isMaximize)
      window.maximize();
    window.on("moved", () => {
      const rect = window.getNormalBounds();
      this.configTemp.window[mode].x = rect.x;
      this.configTemp.window[mode].y = rect.y;
      this.config.set("window", this.configTemp.window);
    });
    window.on("maximize", () => {
      this.configTemp.window[mode].isMaximize = true;
      this.config.set("window", this.configTemp.window);
    });
    window.on("unmaximize", () => {
      this.configTemp.window[mode].isMaximize = false;
      this.config.set("window", this.configTemp.window);
    });
    window.webContents.setWindowOpenHandler((details) => {
      electron.shell.openExternal(details.url);
      return { action: "deny" };
    });
    let loadFile = "";
    switch (mode) {
      case "feedreader":
        loadFile = "/feedreader.html";
        break;
      case "clipboard":
        loadFile = "/clipboard.html";
        break;
      default:
        loadFile = "/index.html";
        break;
    }
    if (!electron.app.isPackaged && process.env["ELECTRON_RENDERER_URL"]) {
      window.loadURL(process.env["ELECTRON_RENDERER_URL"] + loadFile);
    } else {
      window.loadFile(path.join(__dirname, `../renderer${loadFile}`));
    }
    return window;
  }
};
function randomString(len = 10) {
  let str = "0123456789abcdefghijklmnopqrstuvwxyz";
  let strLen = str.length;
  let result = "";
  for (let i = 0; i < len; i++) {
    result += str[Math.floor(Math.random() * strLen)];
  }
  return result;
}
async function getWebImage(url) {
  return new Promise((resolve) => {
    axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
      },
      responseType: "arraybuffer",
      timeout: 0
    }).then(async (response) => {
      resolve(Buffer.from(response.data));
    }).catch((err) => {
      console.log(err);
      resolve(null);
    });
  });
}
async function httpRequestString(url) {
  return new Promise((resolve) => {
    axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
      },
      responseType: "text",
      timeout: 5e3
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      console.log(err);
      resolve(null);
    });
  });
}
CleePIX.run();
