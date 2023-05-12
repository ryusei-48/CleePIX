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
function importBookmarksWorker(options) {
  return new node_worker_threads.Worker(require.resolve("./import_bookmarks.js"), options);
}
function getBookmarksWorker(options) {
  return new node_worker_threads.Worker(require.resolve("./chunks/get-bookmarks-fb5e491d.js"), options);
}
const USER_DATA_PATH = electron.app.getPath("userData");
const STORAGE_PATH = USER_DATA_PATH + "/storage/database";
const CleePIX = {
  Windows: { forScraping: null, forScreenshot: null },
  storage: {},
  configTemp: {},
  config: new Store(
    /*{ encryptionKey: 'ymzkrk33' }*/
  ),
  run: function() {
    if (this.config.size === 0) {
      this.config.store = {
        window: {
          main: { x: null, y: null, isMaximize: false }
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
    electron.nativeTheme.themeSource = "dark";
    this.configTemp = this.config.store;
    this.config.store.instance.forEach((db) => {
      this.initializeDB(db);
    });
    electron.app.whenReady().then(async () => {
      this.Windows.main = this.createWindowInstance();
      electron.app.on("activate", () => {
        if (electron.BrowserWindow.getAllWindows().length === 0)
          CleePIX.createWindowInstance();
      });
    });
    this.config.onDidAnyChange(() => {
      this.Windows.main?.webContents.send("config-update", this.config.store);
    });
    electron.ipcMain.handle("get-config", () => {
      return this.config.store;
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
    electron.ipcMain.on("window-close", () => {
      Object.values(this.storage).forEach((value) => {
        value.db?.close();
      });
      electron.app.quit();
    });
    electron.ipcMain.on("window-maximize", () => {
      if (this.Windows.main?.isMaximized()) {
        this.Windows.main?.unmaximize();
      } else
        this.Windows.main?.maximize();
    });
    electron.ipcMain.on("window-minize", () => {
      this.Windows.main?.minimize();
    });
    electron.app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        electron.app.quit();
      }
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
      this.storage[storage.id].db?.prepare(
        `CREATE INDEX bookmarks_index
          ON bookmarks( id, title, description, url, data, memo, update_time, register_time )`
      ).run();
      this.storage[storage.id].db?.prepare(`CREATE INDEX tags_index ON tags( id, name, update_time, register_time )`).run();
      this.storage[storage.id].db?.prepare(`CREATE INDEX tb_index ON tags_bookmarks( tags_id, bookmark_id )`).run();
      this.storage[storage.id].db?.prepare(`CREATE INDEX ts_index ON tags_structure( parent_id, child_id )`).run();
      [
        "プログラミング",
        "プログラミング言語",
        "プロミス",
        "プロパンガス",
        "engineer",
        "エンジニア",
        "Programming",
        "promise",
        "glass",
        "グラス",
        "Python",
        "C/C++",
        "JavaScript",
        "TypeScript",
        "PHP",
        "HTML",
        "SCSS",
        "Rust",
        "フリーランス",
        "フルスタック",
        "インフラ",
        "フロントエンド",
        "サーバーサイド"
      ].forEach((word) => {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags (name) VALUES ( ? )`
        ).run(word);
      });
      for (let i = 1; i <= 10; i++) {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(0, i);
      }
      for (let i = 11; i <= 18; i++) {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(2, i);
      }
      for (let i = 19; i <= 23; i++) {
        this.storage[storage.id].db.prepare(
          `INSERT INTO tags_structure ( parent_id, child_id ) VALUES ( ?, ? )`
        ).run(6, i);
      }
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
  createWindowInstance: function() {
    const windowConfig = this.configTemp.window.main;
    const window = new electron.BrowserWindow({
      width: 1360,
      minWidth: 1100,
      x: windowConfig.x ? windowConfig.x : void 0,
      height: 830,
      minHeight: 671,
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
    if (this.configTemp.window.main.isMaximize)
      window.maximize();
    window.on("ready-to-show", () => {
      window.show();
    });
    window.on("moved", () => {
      const rect = window.getNormalBounds();
      this.configTemp.window.main.x = rect.x;
      this.configTemp.window.main.y = rect.y;
      this.config.set("window", this.configTemp.window);
    });
    window.on("maximize", () => {
      this.configTemp.window.main.isMaximize = true;
      this.config.set("window", this.configTemp.window);
    });
    window.on("unmaximize", () => {
      this.configTemp.window.main.isMaximize = false;
      this.config.set("window", this.configTemp.window);
    });
    window.webContents.setWindowOpenHandler((details) => {
      electron.shell.openExternal(details.url);
      return { action: "deny" };
    });
    if (!electron.app.isPackaged && process.env["ELECTRON_RENDERER_URL"]) {
      window.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
      window.loadFile(path.join(__dirname, "../renderer/index.html"));
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
