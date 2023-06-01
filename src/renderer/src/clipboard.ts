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
      history?: HTMLDivElement, search?: HTMLDivElement, tmp?: HTMLDivElement,
      __history: { recordList?: HTMLUListElement },
      __search: { recordList?: HTMLUListElement },
      __tmp: { recordList?: HTMLUListElement }
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
    __contentPanel: { __history: {}, __search: {}, __tmp: {} }, __previewPanel: {}
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
    this.liveDom.__contentPanel.search = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.content.search')!;
    this.liveDom.__contentPanel.__search.recordList = this.liveDom.__contentPanel.search.querySelector<HTMLUListElement>('ul.record-list')!;
    this.liveDom.__contentPanel.tmp = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.content.tmp')!;
    this.liveDom.__contentPanel.__tmp.recordList = this.liveDom.__contentPanel.tmp.querySelector<HTMLUListElement>('ul.record-list')!;

    this.liveDom.previewPanel = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.preview-panel')!;
    this.liveDom.__previewPanel.clipText = this.liveDom.contentPanel.querySelector<HTMLTextAreaElement>('#preview-clip-text')!;
    this.liveDom.__previewPanel.clipHtml = this.liveDom.contentPanel.querySelector<HTMLSpanElement>('#preview-clip-html')!;
    this.liveDom.__previewPanel.clipImage = this.liveDom.contentPanel.querySelector<HTMLSpanElement>('#preview-clip-image')!;

    let clickedLi: { history?: HTMLLIElement, search?: HTMLLIElement, tmp?: HTMLLIElement } = {};
    const noDataRecordHistory = this.liveDom.__contentPanel.__history.recordList.querySelector<HTMLLIElement>('li.no-data-record')!;
    const noDataRecordSearch = this.liveDom.__contentPanel.__search.recordList.querySelector<HTMLLIElement>('li.no-data-record')!;
    const noDataRecordTmp = this.liveDom.__contentPanel.__tmp.recordList.querySelector<HTMLLIElement>('li.no-data-record')!;

    const viewPartsHide = () => {
      Object.entries(this.liveDom.__previewPanel).forEach(view => {
        (<HTMLDivElement>view[1].parentElement).classList.add('hide');
        (<HTMLDivElement>view[1].parentElement).inert = true;
      });
    }

    [...this.liveDom.contentPanel.querySelectorAll<HTMLInputElement>('div.tab-labels input.tab')!]
      .forEach((tab) => {
        tab.addEventListener('click', () => {
          const orldTabContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>('div.tab-content div.content.show')!;
          orldTabContent.classList.remove('show');
          orldTabContent.inert = true;
          const activeTabContent = this.liveDom.contentPanel.querySelector<HTMLDivElement>(`div.tab-content div.${ tab.value }`)!;
          activeTabContent.classList.add('show');
          activeTabContent.inert = false;

          if ( tab.value === 'history' && clickedLi.history ) {
            clickedLi.history.click();
          } else if ( tab.value === 'search' && clickedLi.search ) {
            clickedLi.search.click();
          } else if ( tab.value === 'tmp' && clickedLi.tmp ) {
            clickedLi.tmp.click();
          } else viewPartsHide();
        });
      });

    let cliptmp: string = '';

    const viewHistoryRecord = ( clipboard: [ string, string ][], tab: 'history' | 'search' | 'tmp' ) => {

      const li = document.createElement('li');
      const viewText = document.createElement('span');
      const operation = document.createElement('span');
      const copyButton = document.createElement('button');
      li.tabIndex = 0;
      li.classList.add('record', 'animate__animated', 'animate__fadeInLeft');
      operation.classList.add('operation');
      copyButton.classList.add('copy');
      copyButton.title = 'クリップボードに送る';
      copyButton.ariaLabel = 'クリップボードに送る';
      copyButton.innerHTML = `<i class="fa-solid fa-copy"></i>`;

      copyButton.addEventListener('click', () => {
        window.electron.ipcRenderer.invoke('update-clipboard-write-time').then(() => {
          window.electron.ipcRenderer.send('clipboard-write', [ clipboard[0][0], clipboard[0][1] ]);
        });
      });

      li.addEventListener('contextmenu', (e) => {
        window.electron.ipcRenderer.send('clip-hist-copy', { clips: clipboard, pos: { x: e.x, y: e.y }, type: tab });
      });

      li.addEventListener('dblclick', (e) => {
        this.liveDom.contentPanel.querySelector<HTMLButtonElement>('#toggle-preview-panel')!.click();
        (<HTMLLIElement>e.currentTarget).click();
      });

      li.addEventListener('click', (e) => {

        if ( tab === 'history' && clickedLi.history ) {
          clickedLi.history.classList.remove('click');
        } else if ( tab === 'search' && clickedLi.search ) {
          clickedLi.search.classList.remove('click');
        } else if ( tab === 'tmp' && clickedLi.tmp ) {
          clickedLi.tmp.classList.remove('click');
        }

        (<HTMLLIElement>e.currentTarget).classList.add('click');
        clickedLi[ tab ] = <HTMLLIElement>e.currentTarget;

        viewPartsHide();

        clipboard.forEach((clip) => {
          if ( clip[0] === 'text/plain' ) {
            this.liveDom.__previewPanel.clipText!.value = clip[1];
            (<HTMLDivElement>this.liveDom.__previewPanel.clipText?.parentElement).classList.remove('hide');
            (<HTMLDivElement>this.liveDom.__previewPanel.clipText?.parentElement).inert = false;
            textareaResizer( this.liveDom.__previewPanel.clipText! );
          } else if ( clip[0] === 'text/html' ) {
            this.liveDom.__previewPanel.clipHtml!.innerHTML = clip[1];
            this.liveDom.__previewPanel.clipImage!.dataset.htmlSource = clip[1];
            (<HTMLDivElement>this.liveDom.__previewPanel.clipHtml?.parentElement).classList.remove('hide');
            (<HTMLDivElement>this.liveDom.__previewPanel.clipHtml?.parentElement).inert = false;
          } else if ( clip[0].indexOf('image/') >= 0 ) {
            const image = document.createElement('img');
            image.alt = '画像';
            image.src = clip[1];
            this.liveDom.__previewPanel.clipImage!.innerHTML = '';
            this.liveDom.__previewPanel.clipImage!.append( image );
            (<HTMLDivElement>this.liveDom.__previewPanel.clipImage?.parentElement).classList.remove('hide');
            (<HTMLDivElement>this.liveDom.__previewPanel.clipImage?.parentElement).inert = false;
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

      switch ( tab ) {
        case 'history':
          this.liveDom.__contentPanel.__history.recordList?.insertAdjacentElement('afterbegin', li);
          break;
        case 'search':
          this.liveDom.__contentPanel.__search.recordList?.insertAdjacentElement('afterbegin', li);
          break;
        case 'tmp':
          this.liveDom.__contentPanel.__tmp.recordList?.insertAdjacentElement('afterbegin', li);
      }
    }

    const clipboardVariableBuilder = ( records: {
      id: number, text: string, html: string, rtf: string,
      image: string, register_time: string
    }[], tab: 'history' | 'search' | 'tmp' ) => {

      records.forEach((hist) => {
        const clipboard: [ string, string ][] = []
        for ( let [ type, data ] of Object.entries(hist) ) {
          if ( type === 'text' && typeof data === 'string' ) {
            clipboard.push([ 'text/plain', data ]);
          } else if ( type === 'html' && typeof data === 'string' ) {
            clipboard.push([ 'text/html', data ]);
          } else if ( type === 'rtf' && typeof data === 'string' ) {
            clipboard.push([ 'text/rtf', data ]);
          } else if ( type === 'image' && typeof data === 'string' ) {
            clipboard.push([ 'image/png', data ]);
          }
        }

        viewHistoryRecord( clipboard, tab );
      });
    }

    window.electron.ipcRenderer.invoke('get-clipboard', { type: 'history', offset: 0 } )
      .then((historys) => {
        console.log( this.liveDom.__contentPanel.__history.recordList?.childElementCount )
        if ( this.liveDom.__contentPanel.__history.recordList?.childElementCount === 1 ) {
          noDataRecordHistory.classList.add('hide');
        }
        if ( historys.length > 0 ) {
          clipboardVariableBuilder( historys, 'history' );
        }
      });

    window.electron.ipcRenderer.invoke('get-clipboard', { type: 'tmp', offset: 0 })
      .then((tmp) => {
        if ( this.liveDom.__contentPanel.__tmp.recordList?.childElementCount === 1 ) {
          noDataRecordTmp.classList.add('hide');
        }
        if ( tmp.length > 0 ) {
          clipboardVariableBuilder( tmp, 'tmp' );
        }
      });

    const clipboardLisner = async () => {

      new Promise<void>( async (resolve) => {

        const clipboard = await window.electron.ipcRenderer.invoke('clipboard-read');

        if ( clipboard.length === 0 ) { resolve(); return; }
        else if ( cliptmp === clipboard[0][1] ) { resolve(); return; }
        else if ( clipboard.length === 1 && clipboard[0][0] === 'text/rtf' ) { resolve(); return; }
        else cliptmp = clipboard[0][1];
        //console.log(clipboard);

        window.electron.ipcRenderer.send('clipboard-insert-db', clipboard);

        viewHistoryRecord( clipboard, 'history' );

        resolve();
      })
    }

    window.electron.ipcRenderer.on('clipboard-change', () => {
      if ( this.liveDom.__contentPanel.__history.recordList?.childElementCount === 1 ) {
        noDataRecordHistory.classList.add('hide');
      }
      clipboardLisner();
    });

    window.electron.ipcRenderer.on('update-clipboard-saved', (_, savedRecord) => {
      if ( this.liveDom.__contentPanel.__tmp.recordList?.childElementCount === 1 ) {
        noDataRecordTmp.classList.add('hide');
      }
      viewHistoryRecord( savedRecord.clips, 'tmp' );
    });

    this.liveDom.contentPanel.querySelector<HTMLButtonElement>('#clip-saved-all-del-btn')!
      .addEventListener('click', () => {
        window.electron.ipcRenderer.invoke('clipboard-saved-all-delete');
      });

    this.liveDom.previewPanel.querySelector<HTMLButtonElement>('#preview-clip-text-copy')!
      .addEventListener('click', async () => {
        await window.electron.ipcRenderer.invoke('update-clipboard-write-time');
        window.electron.ipcRenderer.send('clipboard-write', [ 'text/plain', this.liveDom.__previewPanel.clipText?.value!, false ]);
      });

    this.liveDom.previewPanel.querySelector<HTMLButtonElement>('#preview-clip-html-copy')!
      .addEventListener('click', async () => {
        await window.electron.ipcRenderer.invoke('update-clipboard-write-time');
        window.electron.ipcRenderer.send('clipboard-write', [ 'text/html', this.liveDom.__previewPanel.clipHtml?.innerHTML! ]);
      });

    this.liveDom.previewPanel.querySelector<HTMLButtonElement>('#preview-clip-image-copy')!
      .addEventListener('click', async () => {
        await window.electron.ipcRenderer.invoke('update-clipboard-write-time');
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