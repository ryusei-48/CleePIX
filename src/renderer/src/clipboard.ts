import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import "../../preload/index.d";
import { clipboard as includeDom } from "./include.dom";

export const clipboard: {

  config?: {
    window: {
      clipboard: {
        width: number, height: number, minWidth: number, minHeight: number,
        x: number | null, y: number | null, isMaximize: boolean, isFixation: boolean
      }
    }
  },
  init: () => void,
  windowControl: () => void,
  liveDom: {
    base: HTMLDivElement,
  }

} = {

  liveDom: {
    base: includeDom.base()
  },

  init: async function () {

    this.config = await window.electron.ipcRenderer.invoke('get-config');
    this.windowControl();
  },

  windowControl: function () {

    this.liveDom.base.querySelector<HTMLButtonElement>('div#close-win > button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-hide', 'clipboard');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#maximize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-maximize', 'clipboard');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#minimize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-minize', 'clipboard');
      });

    const fixationWinButton = this.liveDom.base.querySelector<HTMLButtonElement>('div#fixation-win button')!
    if ( this.config?.window.clipboard.isFixation ) {
      fixationWinButton.classList.add('active');
      fixationWinButton.title = 'ウィンドウの固定を解除';
      fixationWinButton.ariaLabel = 'ウィンドウの固定を解除';
    }
    fixationWinButton.addEventListener('click', (e) => {
        window.electron.ipcRenderer.invoke('clipboard-win-show-top')
          .then((result) => {
            if ( result ) {
              fixationWinButton.classList.add('active');
              fixationWinButton.title = 'ウィンドウの固定を解除';
              fixationWinButton.ariaLabel = 'ウィンドウの固定を解除';
            } else {
              fixationWinButton.classList.remove('active');
              fixationWinButton.title = 'ウィンドウを最前面に固定';
              fixationWinButton.ariaLabel = 'ウィンドウを最前面に固定';
            }
          });
      });

    document.getElementById('app')?.append(this.liveDom.base);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clipboard.init();
});