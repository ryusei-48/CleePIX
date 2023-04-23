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
const cheerio = require("cheerio");
const bookmarkFileParser = require("bookmark-file-parser");
<<<<<<< Updated upstream
=======
const node_worker_threads = require("node:worker_threads");
>>>>>>> Stashed changes
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
const USER_DATA_PATH = electron.app.getPath("userData");
const STORAGE_PATH = USER_DATA_PATH + "/storage/database";
const CleePIXMain = {
  Windows: {},
  storage: {},
  configTemp: {},
  config: new Store(
    /*{ encryptionKey: 'ymzkrk33' }*/
  ),
  run: function() {
    if (this.config.size === 0) {
      this.config.store = {
        instance: [{
          label: "default",
          id: 1,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }, {
          label: "main",
          id: 2,
          path: STORAGE_PATH + `/ite_${randomString()}.db`
        }],
        cache: { currentInstanceId: 1, tagTreeDomStrings: null }
      };
    }
    this.configTemp = this.config.store;
    this.config.store.instance.forEach((db) => {
      this.initializeDB(db);
    });
    electron.app.whenReady().then(async () => {
      this.Windows.main = this.createWindowInstance();
      electron.app.on("activate", () => {
        if (electron.BrowserWindow.getAllWindows().length === 0)
          CleePIXMain.createWindowInstance();
      });
    });
    this.config.onDidAnyChange(() => {
      this.Windows.main?.webContents.send("config-update", this.config.store);
    });
    electron.ipcMain.handle("get-config", () => {
      return this.config.store;
    });
    electron.ipcMain.handle("bookmark-file", async (_, dataString) => {
      const bookmarks = bookmarkFileParser.parseByString(dataString.html);
      if (bookmarks.length > 0) {
        return await importBookmarks(getInstanceDatabasePath(dataString.instanceId), bookmarks);
      } else
        return false;
      async function importBookmarks(databasePath, bookmarks2) {
        return new Promise((resolve2) => {
          if (databasePath) {
            importBookmarksWorker({
              workerData: { dbPath: databasePath, bookmarks: bookmarks2 }
            }).on("message", resolve2);
          } else
            resolve2(false);
        });
      }
      function getInstanceDatabasePath(instanceId) {
        let databasePath = null;
        CleePIXMain.config.store.instance.forEach((ite, index) => {
          if (ite.id === instanceId) {
            databasePath = ite.path;
            return;
          }
        });
        return databasePath;
      }
    });
    electron.ipcMain.handle("get-bookmarks", (_, query) => {
      if (query.tagIdChain !== null) {
        try {
          const bookmarks = this.storage[query.instanceId].db?.prepare(
            `SELECT * FROM bookmarks
              JOIN tags_bookmarks AS tbt ON bookmarks.id = tbt.bookmark_id
              JOIN tags ON tbt.tags_id = tags.id
              WHERE tags.id IN (${query.tagIdChain.map(() => "?").join(",")})
              GROUP BY bookmarks.id HAVING COUNT( bookmarks.id ) = ?
              ORDER BY bookmarks.update_time DESC LIMIT 80`
          ).all(query.tagIdChain, query.tagIdChain.length);
          return bookmarks;
        } catch (e) {
          console.log(e);
          return null;
        }
      } else {
        return this.storage[query.instanceId].db?.prepare(
          `SELECT * FROM bookmarks ORDER BY update_time DESC LIMIT 80`
        ).all();
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
    electron.ipcMain.handle("set-tag-tree-cache", (_, domString) => {
      this.configTemp.cache.tagTreeDomStrings = domString;
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
    electron.ipcMain.handle("get-http-request", async (_, url) => {
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
        }
      });
      if (response && response.ok) {
        const $ = cheerio__namespace.load(await response.text());
        let description = $(`meta[property="og:description"]`).attr("content");
        if (description === void 0)
          description = $(`meta[name="description"]`).attr("content");
        return {
          title: $("title").text(),
          description,
          image: $(`meta[property='og:image']`).attr("content")
        };
      } else
        return null;
    });
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
      this.storage[storage.id].db.prepare(
        `CREATE TABLE "bookmarks" (
          "id" INTEGER NOT NULL UNIQUE, "url" TEXT NOT NULL,
          "title"	TEXT NOT NULL, "description"	TEXT,
          "data" TEXT, "thunb" TEXT, "memo" TEXT,
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
    const window = new electron.BrowserWindow({
      width: 1360,
      height: 830,
      show: false,
      frame: false,
      autoHideMenuBar: true,
      backgroundColor: "#0f0f0f",
      ...process.platform === "linux" ? { icon } : {},
      webPreferences: {
        preload: path.join(__dirname, "../preload/index.js"),
        sandbox: false,
        webviewTag: true
      }
    });
    window.on("ready-to-show", () => {
      window.show();
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
CleePIXMain.run();
