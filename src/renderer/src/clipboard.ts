import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import { clipboard as includeDom } from "./include.dom";
import "../../preload/index.d";
import {NativeImage} from "electron";

export const clipboard: {

  config?: storeConfig,
  init: () => void,
  windowControl: () => void, contentPanel: () => void,
  liveDom: {
    base: HTMLDivElement, contentPanel: HTMLDivElement,
    __contentPanel: {
      history?: HTMLDivElement,
      __history: { recordList?: HTMLUListElement }
    }
  }

} = {

  liveDom: {
    base: includeDom.base(), contentPanel: includeDom.contentPanel(),
    __contentPanel: { __history: {} }
  },

  init: async function () {

    this.config = await window.electron.ipcRenderer.invoke('get-config');
    this.windowControl();
    this.contentPanel();
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
  },

  contentPanel: function () {

    this.liveDom.__contentPanel.history = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.content.history')!;
    this.liveDom.__contentPanel.__history.recordList = this.liveDom.__contentPanel.history.querySelector<HTMLUListElement>('ul.record-list')!;

    [...this.liveDom.contentPanel.querySelectorAll<HTMLInputElement>('div.tab-labels input.tab')!]
      .forEach((tab) => {
        tab.addEventListener('click', () => {
          const orldTabContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.tab-content > div.content.show')!;
          orldTabContent.classList.remove('show');
          orldTabContent.inert = true;
          const activeTabContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>(`div.tab-content > div.${ tab.value }`)!;
          activeTabContent.classList.add('show');
          activeTabContent.inert = false;
        });
      });

    window.electron.ipcRenderer.on('clipboard-update', (_, clipboard) => {
      const li = document.createElement('li');
      li.classList.add('record');
      li.textContent = typeof clipboard[0][1] === 'string' ? clipboard[0][1] : '';
      li.title = typeof clipboard[0][1] === 'string' ? clipboard[0][1] : '';
      this.liveDom.__contentPanel.__history.recordList?.appendChild( li );
    });

    this.liveDom.base.querySelector<HTMLDivElement>('main#insert-panel')!
      .insertAdjacentElement('beforeend', this.liveDom.contentPanel);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clipboard.init();
});