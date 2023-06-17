import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import "../../preload/index.d";
import Quill from 'quill';
import { notepad as includeDom } from "./include.dom";

declare global {
  interface Window {
    notepad: unknown
  }
}

export const notepad: {

  windowId?: number, currentActiveTab?: HTMLButtonElement,
  init: () => void,
  windowControl: () => void, editorContent: () => void,
  liveDom: {
    base: HTMLDivElement, tab?: HTMLDivElement, _tabs: HTMLSpanElement[],
    editer?: HTMLDivElement, _editers: HTMLDivElement[]
  }

} = {

  liveDom: {
    base: includeDom.base(), _tabs: [], _editers:[]
  },

  init: function () {

    window.electron.ipcRenderer.once('window-id', (_, id) => {
      this.windowId = id;
    });

    this.windowControl();
    this.editorContent();
  },

  windowControl: function () {

    this.liveDom.base.querySelector<HTMLButtonElement>('div#close-win > button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('notepad-close', this.windowId );
      });


    this.liveDom.base.querySelector<HTMLButtonElement>('div#maximize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('notepad-maximize', this.windowId );
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#minimize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('notepad-minimize', this.windowId );
      });

    this.liveDom.tab = this.liveDom.base.querySelector<HTMLDivElement>('div#insert-doc-tabs')!;
    this.liveDom.editer = this.liveDom.base.querySelector<HTMLDivElement>('div#insert-editer-content')!;

    document.getElementById('app')?.append( this.liveDom.base );
  },

  editorContent: function () {

    const size = Quill.import('attributors/style/size');
    const fontSize =['10pt','12pt','14pt','16pt','20pt','24pt','32pt','42pt','54pt','68pt','84pt'];
    size.whitelist = fontSize;
    Quill.register( size, true );

    const tabSwitchHandler = ( tab: HTMLButtonElement ) => {

      const oldTabId = Number( this.currentActiveTab?.dataset.tabId! );
      const tabId = Number( tab.dataset.tabId! );

      this.currentActiveTab?.classList.remove('active');
      this.liveDom._editers[ oldTabId ].classList.remove('show');
      this.liveDom._editers[ oldTabId ].inert = true;

      tab.classList.add('active');
      this.liveDom._editers[ tabId ].classList.add('show');
      this.liveDom._editers[ tabId ].inert = false;

      this.currentActiveTab = tab;
    }

    const addTab = ( tabName: string ): HTMLButtonElement => {

      const tabWrap = document.createElement('span');
      const tabButton = document.createElement('button');
      const removeTab = document.createElement('button');

      tabWrap.classList.add('tab-wrap');
      tabWrap.draggable = true;
      tabButton.classList.add('tab', 'active');
      tabButton.textContent = tabName;
      removeTab.classList.add('close');
      removeTab.title = 'タブを閉じる';
      removeTab.ariaLabel = 'タブを閉じる';
      removeTab.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

      tabWrap.addEventListener('dragstart', (e) => {
        e.dataTransfer?.setData('text/plain', 'tab');
      });

      tabButton.addEventListener('click', (e) => {
        tabSwitchHandler( <HTMLButtonElement>e.currentTarget )
      });

      removeTab.addEventListener('click', (e) => {

        const tabId = Number( (<HTMLButtonElement>e.currentTarget).dataset.tabId! );
        if ( this.currentActiveTab?.isEqualNode( this.liveDom._tabs[ tabId ].childNodes[0] ) ) {
          if ( this.liveDom._tabs.filter((tab) => tab !== undefined ).length > 1 ) {
            const nearTab = this.currentActiveTab.parentElement!.previousElementSibling ||
              this.currentActiveTab.parentElement!.nextElementSibling!;
            (<HTMLButtonElement>nearTab.childNodes[0]).click();
          } else window.electron.ipcRenderer.send('notepad-close', this.windowId );
        }

        this.liveDom._tabs[ tabId ].remove();
        delete this.liveDom._tabs[ tabId ];
        this.liveDom._editers[ tabId ].remove();
        delete this.liveDom._editers[ tabId ];
      });

      tabWrap.appendChild( tabButton );
      tabWrap.appendChild( removeTab );

      this.liveDom.tab?.insertAdjacentElement('beforeend', tabWrap );
      const tabId = this.liveDom._tabs.push( tabWrap ) - 1;
      tabButton.dataset.tabId = `${ tabId }`;
      removeTab.dataset.tabId = `${ tabId }`;

      return tabButton;
    }

    const addEditer = ( addedTab: HTMLButtonElement ) => {

      const doc = document.createElement('div');
      const statusBar = includeDom.statusBar();

      doc.classList.add('doc', 'show');
      doc.innerHTML = `<div class="editer"></div>`;
      doc.append( statusBar );

      this.liveDom.editer?.insertAdjacentElement('beforeend', doc );
      doc.dataset.tabId = `${ this.liveDom._editers.push( doc ) }`;

      if ( this.currentActiveTab ) {
        tabSwitchHandler( addedTab );
      }

      this.currentActiveTab = addedTab;

      const editer = new Quill( <HTMLDivElement>doc.childNodes[0], {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': fontSize }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],

            //[{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],

            ['image', 'video', 'code-block'],
          ]
        },
        placeholder: 'ここに本文を入力',
      });
      editer.focus();

      editer.on('text-change', () => {
        const index = editer.getSelection()?.index || 0;
        const lineNumber = editer.getLines( 0,index ).length;
        const [ _, lineIndex ] = editer.getLine( index );

        (<HTMLSpanElement>statusBar.childNodes[3]).textContent = `文字数：${ editer.getLength() }`;
        (<HTMLSpanElement>statusBar.childNodes[1]).textContent = `${ lineNumber } 行:${ lineIndex } 文字目`
      });

      editer.on('selection-change', (range) => {
        const lineNumber = editer.getLines( 0, range.index ).length;
        const [ _, lineIndex ] = editer.getLine( range.index );
        if ( range.length > 0 ) {
          (<HTMLSpanElement>statusBar.childNodes[3]).textContent = `選択文字数：${ range.length }`;
        } else {
          (<HTMLSpanElement>statusBar.childNodes[3]).textContent = `文字数：${ editer.getLength() }`;
        }
        (<HTMLSpanElement>statusBar.childNodes[1]).textContent = `${ lineNumber } 行:${ lineIndex } 文字目`
      });
    }

    addEditer( addTab( 'タイトルなし' ) );

    this.liveDom.base.querySelector<HTMLButtonElement>('#add-doc-btn')!
      .addEventListener('click', () => {
        addEditer( addTab( 'タイトルなし' ) );
      });

    this.liveDom.tab?.addEventListener('dragover', (e) => { e.preventDefault() });

    this.liveDom.tab?.addEventListener('drop', (e) => {
      e.preventDefault();
      console.log(e.dataTransfer?.getData('text/plain'));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  notepad.init();
  window.notepad = notepad;
});