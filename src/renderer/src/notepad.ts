import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import "../../preload/index.d";
import { notepad as includeDom } from "./include.dom";

export const feedreader: {

  windowId?: number,
  init: () => void,
  windowControl: () => void,
  liveDom: {
    base: HTMLDivElement,
  }

} = {

  liveDom: {
    base: includeDom.base()
  },

  init: function () {

    window.electron.ipcRenderer.once('window-id', (_, id) => {
      this.windowId = id;
    });

    this.windowControl();
  },

  windowControl: function () {

    this.liveDom.base.querySelector<HTMLButtonElement>('div#close-win > button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('notepad-close', this.windowId );
      });


    this.liveDom.base.querySelector<HTMLButtonElement>('div#maximize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-maximize', 'feedreader');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#minimize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-minize', 'feedreader');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#hide-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-hide', 'feedreader');
      });

    document.getElementById('app')?.append(this.liveDom.base);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  feedreader.init();
});