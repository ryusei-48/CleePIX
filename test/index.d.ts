/// <reference types="node" />

declare module "esqlite" {
  const OPEN_FLAGS = {
    READONLY: 0x00000001,
    READWRITE: 0x00000002,
    CREATE: 0x00000004,
    MEMORY: 0x00000080,
    SHAREDCACHE: 0x00020000,
    PRIVATECACHE: 0x00040000,
    NOFOLLOW: 0x01000000,
  };

  const PREPARE_FLAGS = {
    NO_VTAB: 0x04,
  }

  const version: string = '';

  class Database {
    constructor(path: string): this {}
    open(flags?: OPEN_FLAGS): void {}
    query(
      sql: String,
      options?: ( (err: Error, rows: any) => void ) | (string | number)[] | { [key: string | number]: string | number },
      values?: ( (err: Error, rows: any) => void ) | (string | number)[] | { [key: string | number]: string | number },
      callback?: (err: Error, rows: any) => void
      ): void {}
    autoCommitEnabled(): boolean {}
    close(): void {}
    end(): void {}
    interrupt( callback: () => void ): void {}
  }
}