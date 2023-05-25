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
      const viewText = document.createElement('span');
      const operation = document.createElement('span');
      const copyButton = document.createElement('button');
      li.classList.add('record');
      operation.classList.add('operation');
      copyButton.classList.add('copy');
      copyButton.title = 'クリップボードに送る';
      copyButton.ariaLabel = 'クリップボードに送る';
      copyButton.innerHTML = `<i class="fa-solid fa-copy"></i>`;

      copyButton.addEventListener('click', () => {
        if ( clipboard[0][0].indexOf('image/') >= 0 ) {
          window.electron.ipcRenderer.send('clipboard-write', [ clipboard[0][0], clipboard[0][1].split(',')[1] ]);
          //console.log( [ clipboard[0][0], clipboard[0][1].split(',')[1] ] );
        } else {
          window.electron.ipcRenderer.send('clipboard-write', [ clipboard[0][0], clipboard[0][1] ]);
          //console.log( [ clipboard[0][0], clipboard[0][1] ] );
        }
      });

      if ( clipboard[0][0] === 'text/plain' && typeof clipboard[0][1] === 'string' ) {
        viewText.textContent = clipboard[0][1];
        viewText.title = clipboard[0][1];
        viewText.classList.add('view-text');
      } else if ( clipboard[0][0] === 'text/html' && typeof clipboard[0][1] === 'string' ) {
        let isNativeImage: boolean = false;
        clipboard.forEach(clip => {
          if ( clip[0].indexOf('image/') ) {
            isNativeImage = true;
          }
        });

        if ( isNativeImage ) {
          viewText.innerHTML = clipboard[0][1];
          viewText.title = '画像';
          viewText.classList.add('view-img');
        } else {
          viewText.textContent = clipboard[0][1];
          viewText.title = clipboard[0][1];
          viewText.classList.add('view-text');
        }
      } else if ( clipboard[0][0].indexOf('image/') >= 0 ) {
        const img = document.createElement('img');
        img.alt = '画像';
        img.src = clipboard[0][1];
        viewText.appendChild( img );
        viewText.classList.add('view-img');
      }

      li.appendChild( viewText );
      operation.appendChild( copyButton );
      li.appendChild( operation );
      this.liveDom.__contentPanel.__history.recordList
        ?.insertAdjacentElement('afterbegin', li);
    });

    this.liveDom.base.querySelector<HTMLDivElement>('main#insert-panel')!
      .insertAdjacentElement('beforeend', this.liveDom.contentPanel);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clipboard.init();
});