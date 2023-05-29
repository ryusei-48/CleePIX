import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import { clipboard as includeDom } from "./include.dom";
import "../../preload/index.d";
import { URItoBlob, textareaResizer } from "./functions";

export const clipboard: {

  config?: storeConfig,
  init: () => void,
  windowControl: () => void, contentPanel: () => void,
  liveDom: {
    base: HTMLDivElement, contentPanel: HTMLDivElement,
    __contentPanel: {
      history?: HTMLDivElement,
      __history: { recordList?: HTMLUListElement }
    },
    previewPanel?: HTMLDivElement,
    __previewPanel: {
      clipText?: HTMLTextAreaElement, clipHtml?: HTMLSpanElement,
      clipImage?: HTMLSpanElement
    }
  }

} = {

  liveDom: {
    base: includeDom.base(), contentPanel: includeDom.contentPanel(),
    __contentPanel: { __history: {} }, __previewPanel: {}
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
    if ( this.config?.window?.clipboard.isFixation ) {
      fixationWinButton.classList.add('active');
      fixationWinButton.title = 'ウィンドウの固定を解除';
      fixationWinButton.ariaLabel = 'ウィンドウの固定を解除';
    }
    fixationWinButton.addEventListener('click', () => {
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

  contentPanel: async function () {

    this.liveDom.__contentPanel.history = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.content.history')!;
    this.liveDom.__contentPanel.__history.recordList = this.liveDom.__contentPanel.history.querySelector<HTMLUListElement>('ul.record-list')!;

    this.liveDom.previewPanel = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.preview-panel')!;
    this.liveDom.__previewPanel.clipText = this.liveDom.contentPanel.querySelector<HTMLTextAreaElement>('#preview-clip-text')!;
    this.liveDom.__previewPanel.clipHtml = this.liveDom.contentPanel.querySelector<HTMLSpanElement>('#preview-clip-html')!;
    this.liveDom.__previewPanel.clipImage = this.liveDom.contentPanel.querySelector<HTMLSpanElement>('#preview-clip-image')!;


    [...this.liveDom.contentPanel.querySelectorAll<HTMLInputElement>('div.tab-labels input.tab')!]
      .forEach((tab) => {
        tab.addEventListener('click', () => {
          const orldTabContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.tab-content div.content.show')!;
          orldTabContent.classList.remove('show');
          orldTabContent.inert = true;
          const activeTabContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>(`div.tab-content div.${ tab.value }`)!;
          activeTabContent.classList.add('show');
          activeTabContent.inert = false;
        });
      });

    let oneStopEntryFlag: boolean = false;
    let clickedLi: HTMLLIElement | null = null;
    let cliptmp: string = '';
    const clipboardLisner = async () => {

      new Promise<void>( async (resolve) => {

        if ( oneStopEntryFlag ) {
          oneStopEntryFlag = false; return;
        }

        const clipboard = await window.electron.ipcRenderer.invoke('clipboard-read');

        if ( clipboard.length === 0 ) { resolve(); return; }
        if ( cliptmp === clipboard[0][1] ) { resolve(); return; }
        else cliptmp = clipboard[0][1];
        console.log(clipboard);

        const li = document.createElement('li');
        const viewText = document.createElement('span');
        const operation = document.createElement('span');
        const copyButton = document.createElement('button');
        li.classList.add('record', 'animate__animated', 'animate__fadeInLeft');
        operation.classList.add('operation');
        copyButton.classList.add('copy');
        copyButton.title = 'クリップボードに送る';
        copyButton.ariaLabel = 'クリップボードに送る';
        copyButton.innerHTML = `<i class="fa-solid fa-copy"></i>`;

        copyButton.addEventListener('click', () => {
          window.electron.ipcRenderer.send('clipboard-write', [ clipboard[0][0], clipboard[0][1] ]);
          oneStopEntryFlag = true;
        });

        li.addEventListener('contextmenu', (e) => {
          window.electron.ipcRenderer.send('clip-hist-copy', { clips: clipboard, pos: { x: e.x, y: e.y } });
        });

        li.addEventListener('click', (e) => {
          if ( clickedLi ) {
            clickedLi.classList.remove('click');
          }

          (<HTMLLIElement>e.currentTarget).classList.add('click');
          clickedLi = <HTMLLIElement>e.currentTarget

          Object.entries(this.liveDom.__previewPanel).forEach(view => {
            (<HTMLDivElement>view[1].parentElement).classList.add('hide');
          });

          clipboard.forEach((clip) => {
            if ( clip[0] === 'text/plain' ) {
              this.liveDom.__previewPanel.clipText!.value = clip[1];
              (<HTMLDivElement>this.liveDom.__previewPanel.clipText?.parentElement).classList.remove('hide');
              textareaResizer( this.liveDom.__previewPanel.clipText! );
            } else if ( clip[0] === 'text/html' ) {
              this.liveDom.__previewPanel.clipHtml!.innerHTML = clip[1];
              this.liveDom.__previewPanel.clipImage!.dataset.htmlSource = clip[1];
              (<HTMLDivElement>this.liveDom.__previewPanel.clipHtml?.parentElement).classList.remove('hide');
            } else if ( clip[0].indexOf('image/') >= 0 ) {
              const image = document.createElement('img');
              image.alt = '画像';
              image.src = clip[1];
              this.liveDom.__previewPanel.clipImage!.innerHTML = '';
              this.liveDom.__previewPanel.clipImage!.append( image );
              (<HTMLDivElement>this.liveDom.__previewPanel.clipImage?.parentElement).classList.remove('hide');
            }
          });
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
          img.src = window.URL.createObjectURL( URItoBlob( clipboard[0][1] ) );
          viewText.appendChild( img );
          viewText.classList.add('view-img');
        }

        li.appendChild( viewText );
        operation.appendChild( copyButton );
        li.appendChild( operation );
        this.liveDom.__contentPanel.__history.recordList
          ?.insertAdjacentElement('afterbegin', li);

        resolve();
      })
    }

    window.electron.ipcRenderer.on('clipboard-change', () => {
      clipboardLisner();
    });

    this.liveDom.previewPanel.querySelector<HTMLButtonElement>('#preview-clip-text-copy')!
      .addEventListener('click', () => {
        window.electron.ipcRenderer.send('clipboard-write', [ 'text/plain', this.liveDom.__previewPanel.clipText?.value!, false ]);
      });

    this.liveDom.previewPanel.querySelector<HTMLButtonElement>('#preview-clip-html-copy')!
      .addEventListener('click', () => {
        window.electron.ipcRenderer.send('clipboard-write', [ 'text/html', this.liveDom.__previewPanel.clipHtml?.innerHTML! ]);
      });

    this.liveDom.previewPanel.querySelector<HTMLButtonElement>('#preview-clip-image-copy')!
      .addEventListener('click', () => {
        const dataURI = (<HTMLImageElement>this.liveDom.__previewPanel.clipImage!.childNodes[0]).src;
        window.electron.ipcRenderer.send('clipboard-write', [ 'image/png', dataURI ]);
      });

    const resizePanelBar = this.liveDom.contentPanel.querySelector<HTMLSpanElement>('span.resize-bar')!;
    const clipContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.tab-content > div.content-wrap')!;
    const clipPreview = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.tab-content > div.preview-panel')!;

    this.liveDom.contentPanel.querySelector<HTMLButtonElement>('#toggle-preview-panel')!
      .addEventListener('click', (e) => {
        e.stopPropagation();
        if ( (<HTMLButtonElement>e.currentTarget).dataset.isShow === 'false' ) {
          (<HTMLButtonElement>e.currentTarget).innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
          (<HTMLButtonElement>e.currentTarget).title = "プレビューパネルを閉じる";
          (<HTMLButtonElement>e.currentTarget).ariaLabel = 'プレビューパネルを閉じる';
          (<HTMLButtonElement>e.currentTarget).dataset.isShow = 'true';
          clipContent.classList.add('resize');
          resizePanelBar.classList.add('show');
          clipPreview.classList.add('show');
          window.electron.ipcRenderer.send('resize-aspect16/9-win', true);
        } else {
          (<HTMLButtonElement>e.currentTarget).innerHTML = `<i class="fa-solid fa-arrow-right-to-bracket"></i>`;
          (<HTMLButtonElement>e.currentTarget).title = "保存されたクリップボードのプレビューを表示";
          (<HTMLButtonElement>e.currentTarget).ariaLabel = '保存されたクリップボードのプレビューを表示';
          (<HTMLButtonElement>e.currentTarget).dataset.isShow = 'false';
          clipContent.classList.remove('resize');
          clipContent.style.removeProperty('flex-basis');
          resizePanelBar.classList.remove('show');
          clipPreview.classList.remove('show');
          window.electron.ipcRenderer.send('resize-aspect16/9-win', false);
        }
      });

      const panelResizing = (e: MouseEvent): void => {
        clipContent.style.flexBasis = `${e.x}px`;
      };
      resizePanelBar.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', panelResizing, false);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', panelResizing, false);
        }, false);
      });

    this.liveDom.base.querySelector<HTMLDivElement>('main#insert-panel')!
      .insertAdjacentElement('beforeend', this.liveDom.contentPanel);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clipboard.init();
});