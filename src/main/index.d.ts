import { IpcMain, IpcMainEvent } from "electron";

export declare global {

  type windowInitValues = {
    width: number, height: number, minWidth: number, minHeight: number,
    x: number | null, y: number | null, isMaximize: boolean
  }

  type storeConfig = {
    window?: {
      main: windowInitValues, feedreader: windowInitValues,
      clipboard: windowInitValues & { isFixation: boolean }
    },
    instance?: { label: string, id: number, path: string }[],
    cache?: {
      currentInstanceId: number,
      tagTreeDomStrings: { [key: number]: string } | null,
      selectedTags: { [key: number]: number } | null
    }
  }

  namespace Electron {

    interface IpcMain {

      on( channel: String, listener: ( event: IpcMainEvent, ...arg: any[] ) => void ): Electron.IpcMain;
      on( channel: 'clipboard-write', listener: ( event: IpcMainEvent, arg: [ String, string ] ) => void ): Electron.IpcMain;
      on( channel: 'clip-hist-copy', listener: ( event: IpcMainEvent, arg: { pos: { x: number, y: number }, clips: [ string, string ][] } ) => void ): Electron.IpcMain;
      on( channel: 'resize-aspect16/9-win', listener: ( event: IpcMainEvent, arg: boolean ) => void ): Electron.IpcMain;
      on( channel: 'clipboard-insert-db', listener: ( event: IpcMainEvent, arg:[ string, string ][] ) => void ): Electron.IpcMain;

      handle( channel: string, listener: (event: IpcMainInvokeEvent, ...args: any[]) => any): void;
      handle( channel: 'get-clipboard-historys', listener: ( event: IpcMainInvokeEvent, offset: number ) => any[] ): void;
    }
  }
}