import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import "../../preload/index.d";
import Quill from 'quill';
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

    const editerTest = this.liveDom.base.querySelector<HTMLDivElement>('div#editer-test')!;
    const size = Quill.import('attributors/style/size');
    const fontSize =['10pt','12pt','14pt','16pt','20pt','24pt','32pt','42pt','54pt','68pt','84pt'];
    size.whitelist = fontSize;
    Quill.register( size, true );
    const editer = new Quill( editerTest, {
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  feedreader.init();
});