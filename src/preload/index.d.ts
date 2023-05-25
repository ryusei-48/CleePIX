import { ElectronAPI, IpcRenderer as ir, WebFrame, NodeProcess } from '@electron-toolkit/preload';
import { IpcRenderer, ipcRenderer, NativeImage } from "electron";
import "../main/index.d";

type sc = storeConfig;

declare global {
  type storeConfig = sc;

  interface Window {
    electron: ElectronAPI,
    api: unknown
  }

  interface ElectronAPI {
    ipcRenderer: ipc;
  }

  interface ipc extends ir {
    send(channel: string, ...args: any[]): void;
    send( channel: 'window-close'): void;
    send( channel: 'window-maximize', arg: 'main' | 'clipboard' | 'feedreader' ): void;
    send( channel: 'window-minize', arg: 'main' | 'clipboard' | 'feedreader' ): void;
    send( channel: 'window-hide', arg: 'main' | 'clipboard' | 'feedreader' ): void;
    send( channel: 'clipboard-write', arg: [ String, string ] ): void;

    on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    on( channel: 'clipboard-update', listener: ( event: IpcRendererEvent, arg: [ string, string ][] ) => void ): IpcRenderer

    invoke(channel: string, ...args: any[]): Promise<any>;
    invoke( channel: 'clipboard-win-show-top'): Promise<Boolean>;
    invoke( channel: 'get-config' ): Promise<storeConfig>;
  }
}

