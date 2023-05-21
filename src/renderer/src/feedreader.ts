import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import "../../preload/index.d";
import { clipboard } from "./include.dom";

export const feedreader: {

  init: () => void,
  windowControl: () => void,
  liveDom: {
    base: HTMLDivElement,
  }

} = {

  liveDom: {
    base: clipboard.base()
  },

  init: function () {

    this.windowControl();
  },

  windowControl: function () {

    this.liveDom.base.querySelector<HTMLButtonElement>('div#close-win > button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-hide', 'feedreader');
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