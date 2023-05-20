import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import "../../preload/index.d";
import {includeDom} from "./include.dom";

export const clipboard: {

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

    this.windowControl();
  },

  windowControl: function () {

    this.liveDom.base.querySelector<HTMLButtonElement>('div#close-win > button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-close', 'clipboard');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#maximize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-maximize', 'clipboard');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#minimize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-minize', 'clipboard');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#hide-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-hide', 'clipboard');
      });

    document.getElementById('app')?.append(this.liveDom.base);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clipboard.init();
});