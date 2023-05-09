import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import Quill from "quill";
import "../../preload/index.d";
import {includeDom} from "./include.dom";

declare global {
  interface Window {
    app: typeof CleePIX;
  }
  interface WindowEventMap {
    "ite_change": CustomEvent<{id: number;}>;
  }
}

export const CleePIX: {

  init: () => void, currentInstanceId: number,
  config: {
    instance?: {label: string, id: number, path: string;}[],
    cache?: {
      currentInstanceId: number, selectedTags: { [key: number]: number } | null,
      tagTreeDomStrings: {[key: number]: string;} | null;
    }
  },
  instanceDBs: {label: string, id: number, path: string;}[],
  instanceLabels: string[], windowControl: () => void,
  AppSetingPanel: () => void,
  instancePanelControl: {
    addInstance: () => void, addBookmark: () => void,
    addRssFeed: () => void, addText: () => void,
    commonModalWindow: (
      click_id: string, domPram: HTMLDivElement,
      wrapClass: string, focus_id: string | null
    ) => void, addTagBlock: () => void, tagTreePanel: () => void,
    addContents: () => void
  },
  liveDom: {
    base: HTMLDivElement, instancePanel: HTMLDivElement,
    addAppSeting: HTMLDivElement, addInstance: HTMLDivElement,
    addBookmark: HTMLDivElement, addRssFeed: HTMLDivElement,
    addText: HTMLDivElement, addTagBlock: HTMLDivElement,
    tagTreePanel: {[key: number]: HTMLUListElement},
    contentsPanel: {[key: string]: HTMLDivElement}
  },
  shareParts: {
    getBookmarkItemDom: ( bookmarks: any ) => void,
    toggleLoadingEfect: ( toggle: boolean ) => void
  }

} = {

  currentInstanceId: 0, instanceLabels: ['default'],
  instanceDBs: [], config: {},
  liveDom: {
    base: includeDom.base(), instancePanel: includeDom.instancePanel(),
    addAppSeting: includeDom.addAppSetings(),
    addInstance: includeDom.addInstance(),
    addBookmark: includeDom.addBookmarkSeelector(),
    addRssFeed: includeDom.addRssFeedSeelector(),
    addText: includeDom.addTextSelector(),
    addTagBlock: includeDom.addTagBlock(),
    tagTreePanel: {},
    contentsPanel: {
      base: includeDom.contentsPanel.base()
    }
  },

  init: async function () {

    const config = await window.electron.ipcRenderer.invoke('get-config');

    this.config = config;
    this.instanceDBs = config.instance;
    this.currentInstanceId = config.cache.currentInstanceId;

    this.windowControl();
    this.AppSetingPanel();
    this.instancePanelControl.addInstance();
    this.instancePanelControl.addBookmark();
    this.instancePanelControl.addRssFeed();
    this.instancePanelControl.addText();
    this.instancePanelControl.addTagBlock();
    this.instancePanelControl.tagTreePanel();
    this.instancePanelControl.addContents();

    /*const script = document.createElement('script');
    //script.src = "https://platform.twitter.com/widgets.js";
    script.type = 'application/javascript';
    script.src = 'https://embed.nicovideo.jp/watch/sm41943302/script?w=640&h=360';
    document.body.appendChild(script);*/

    window.addEventListener('keydown', (e) => {
      if ( e.ctrlKey && e.shiftKey && e.code === 'KeyA' ) {
        window.electron.ipcRenderer.invoke('set-metadata-all-bookmarks', CleePIX.currentInstanceId)
          .then((result) => { console.log(result) });
      }else if ( e.ctrlKey && e.shiftKey && e.code === 'KeyD' ) {
        window.electron.ipcRenderer.invoke('get-dom-screenshot', 'https://gigazine.net')
          .then((res) => {
            const insertImage = this.liveDom.addAppSeting
                .querySelector<HTMLSpanElement>('span#test-img')!;
            const img = document.createElement('img');
            img.style.width = '400px';
            img.style.aspectRatio = '16 / 9';
            img.src = window.URL.createObjectURL( new Blob([res], { type: 'image/png' }) );
            insertImage.appendChild( img );
          });
      }else if ( e.ctrlKey && e.altKey && e.code === 'KeyD' ) {
        window.electron.ipcRenderer.send('open-dev-tool');
      }
    });

  },

  windowControl: function () {

    this.liveDom.base.querySelector<HTMLButtonElement>('div#close-win > button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-close');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#maximize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-maximize');
      });

    this.liveDom.base.querySelector<HTMLButtonElement>('div#minimize-win button')
      ?.addEventListener('click', () => {
        window.electron.ipcRenderer.send('window-minize');
      });

    this.liveDom.base.querySelector<HTMLDivElement>('main#insert-panel')
      ?.append(this.liveDom.instancePanel);
    document.getElementById('app')?.append(this.liveDom.base);

    window.electron.ipcRenderer.on('config-update', (_, config) => {
      this.instanceDBs = config.instance;
      //this.currentInstanceId = config.cache.currentInstanceId;
      this.config = config;
    });
  },

  AppSetingPanel: function () {

    this.instancePanelControl.commonModalWindow(
      '#app-setings', this.liveDom.addAppSeting,
      '.app-setings-modal-wrap', 'div.app-seting-element'
    );

    this.liveDom.addAppSeting.querySelector<HTMLInputElement>('#import-bookmark')!
      .addEventListener('change', (e) => {
        const reader = new FileReader();
        const files = (<HTMLInputElement> e.target).files;
        if (files?.length === 1) {
          const file = files[0];
          if (file.type === 'text/html') {
            reader.readAsText(file, 'UTF-8');
            reader.onerror = () => {
              alert('ファイルの読み込みに失敗しました。');
            };
            reader.onload = () => {
              CleePIX.shareParts.toggleLoadingEfect( true );
              window.electron.ipcRenderer.invoke('import-bookmark-file', {
                instanceId: CleePIX.currentInstanceId, html: reader.result
              }).then( async (res) => {
                CleePIX.shareParts.toggleLoadingEfect( false );
                if ( Array.isArray( res ) ) {
                  await window.electron.ipcRenderer.invoke('set-tag-tree-cache', null);
                  window.electron.ipcRenderer.send('window-reload');
                }
              });
            };
          }
        }
      });

    CleePIX.liveDom.instancePanel.insertAdjacentElement('afterend', this.liveDom.addAppSeting);
  },

  instancePanelControl: {

    addInstance: function () {

      this.commonModalWindow(
        '#show-inscetance-modal-btn', CleePIX.liveDom.addInstance,
        '.instance-select-element-wrap', 'div.instance-names'
      );

      let currentTextInput: HTMLInputElement;
      let textInputList: {[key: string]: HTMLInputElement;} = {};
      const addInstanceLavel = (label: string, id: string): HTMLInputElement => {

        const labelWrap = document.createElement('span');
        labelWrap.classList.add('label-wrap');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.title = 'インスタンス削除';
        deleteBtn.ariaLabel = 'インスタンス削除';
        deleteBtn.dataset.id = id;
        deleteBtn.dataset.name = label;
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark">';
        deleteBtn.addEventListener('click', () => {
          if (Object.keys(textInputList).length === 1) {
            alert('インスタンスが1つの場合は削除できません。'); return;
          }
          if (confirm('インスタンスを削除してもよろしいですか？')) {
            labelWrap.remove();
            delete textInputList[deleteBtn.dataset.id!];
            CleePIX.liveDom.tagTreePanel[deleteBtn.dataset.id!].remove();
            delete CleePIX.liveDom.tagTreePanel[deleteBtn.dataset.id!];
            CleePIX.instanceDBs.forEach((ite, index) => {
              if (ite.id === Number(deleteBtn.dataset.id!)) {
                CleePIX.instanceDBs.splice(index, 1); return;
              }
            });

            const nextTextInput = Object.values(textInputList).shift()!;
            nextTextInput.click();
            currentTextInput = nextTextInput;

            window.electron.ipcRenderer.send('remove-instance', Number(deleteBtn.dataset.id!));
          }
        });

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = label;
        textInput.dataset.id = id;
        textInput.readOnly = true;
        const renameInstance = (): void => {
          textInput.readOnly = false;
          textInput.select();
        };
        textInput.addEventListener('dblclick', () => {renameInstance();});
        textInput.addEventListener('keydown', e => {
          if (e.key == 'F2') {renameInstance();}
        });
        textInput.addEventListener('change', e => {
          window.electron.ipcRenderer.send('ite-name-update', {
            name: (<HTMLInputElement> e.target).value, id: Number(id)
          });
        });
        textInput.addEventListener('click', e => {
          currentTextInput.style.removeProperty('border-bottom-color');
          currentTextInput.style.removeProperty('background-color');
          (<HTMLInputElement> e.target).style.borderBottomColor = 'lightgreen';
          (<HTMLInputElement> e.target).style.backgroundColor = '#294c29';
          const orldId = CleePIX.currentInstanceId;
          CleePIX.currentInstanceId = Number((<HTMLInputElement> e.target).dataset.id);
          CleePIX.config.cache!.currentInstanceId = Number((<HTMLInputElement> e.target).dataset.id);

          window.dispatchEvent(new CustomEvent('ite_change', {detail: {id: orldId}}));
          window.electron.ipcRenderer.send('set-ite-id-cache', Number((<HTMLInputElement> e.target).dataset.id));

          currentTextInput = <HTMLInputElement> e.target;
        });
        textInput.addEventListener('focusout', () => {textInput.readOnly = true;});

        if (id === `${CleePIX.currentInstanceId}`) {
          currentTextInput = textInput;
          currentTextInput.style.borderBottomColor = 'lightgreen';
          currentTextInput.style.backgroundColor = '#294c29';
        }

        labelWrap.appendChild(textInput);
        labelWrap.appendChild(deleteBtn);

        textInputList[id] = textInput;

        CleePIX.liveDom.addInstance
          .querySelector<HTMLSpanElement>('span.label-group')
          ?.appendChild(labelWrap);

        return textInput;
      };

      CleePIX.instanceDBs.forEach(db => {
        addInstanceLavel(db.label, `${db.id}`);
      });

      CleePIX.liveDom.addInstance
        .querySelector<HTMLButtonElement>('#add-instance-btn')
        ?.addEventListener('click', () => {
          window.electron.ipcRenderer.invoke('add-instance')
            .then(res => {
              addInstanceLavel(res.label, `${res.id}`).click();
            });
        });

      CleePIX.liveDom.instancePanel.insertAdjacentElement('afterend', CleePIX.liveDom.addInstance);
    },

    addBookmark: function () {

      this.commonModalWindow(
        '#show-bookmark-modal-btn', CleePIX.liveDom.addBookmark,
        '.add-bookmark-modal-wrap', '#add-bookmark-url'
      );

      const urlInput = CleePIX.liveDom.addBookmark.querySelector<HTMLInputElement>('#add-bookmark-url')!;
      const titleInput = CleePIX.liveDom.addBookmark.querySelector<HTMLInputElement>('#add-bookmark-title')!;
      const descriptionInput = CleePIX.liveDom.addBookmark.querySelector<HTMLTextAreaElement>('#add-bookmark-description')!;
      const memoInput = CleePIX.liveDom.addBookmark.querySelector<HTMLInputElement>('#add-bookmark-memo')!;
      const screenshotButton = CleePIX.liveDom.addBookmark.querySelector<HTMLButtonElement>('#add-bookmark-screenshot')!;
      const thumbnailButton = CleePIX.liveDom.addBookmark.querySelector<HTMLButtonElement>('#add-bookmark-general-thunb')!;
      const customThumbnail = CleePIX.liveDom.addBookmark.querySelector<HTMLInputElement>('#add-bk-custom-thumb')!;
      const thumbPreview = CleePIX.liveDom.addBookmark.querySelector<HTMLDivElement>('div.view-thumb')!;
      const noThumbElement = thumbPreview.innerHTML;
      const registerBookmark = CleePIX.liveDom.addBookmark.querySelector<HTMLButtonElement>('#add-bookmark-btn')!;

      let thumbnail: { data: Buffer, mimeType: string } | null = null;
      let imageURL: string | null = null;

      urlInput.addEventListener('change', (e) => {
        const url = (<HTMLInputElement> e.target).value;
        if ( !validationString('url', url) ) return;
        window.electron.ipcRenderer
          .invoke('get-site-metadata', url)
          .then(response => {
            if (response !== null) {
              titleInput.value = response.title;
              descriptionInput.textContent = response.description.replace(/ |　/g, '');
              imageURL = null;

              if (response.image) {
                setThumbnailGeneral( response.image );
                imageURL = response.image;
              } else setThumbnailScreenshot();
            }
          });
      });

      thumbnailButton.addEventListener('click', () => { setThumbnailGeneral( imageURL ) });

      screenshotButton.addEventListener('click', () => {

        if ( !validationString('url', urlInput.value) ) return;
        screenshotButton.disabled = true;
        setThumbnailScreenshot( screenshotButton );
      });

      customThumbnail.addEventListener('change', async (e) => {

        const files = (<HTMLInputElement>e.target).files;
        if ( files && files.length == 1 && files[0].type.indexOf('image/') > -1 ) {
          const imageBuffer = <Buffer> await files[0].arrayBuffer();
          const mimeType = await window.electron.ipcRenderer.invoke('get-mimeType-fromBuffer', imageBuffer);
          if ( mimeType ) {
            const img = document.createElement('img');
            img.alt = 'サムネイル画像のプレビュー';
            thumbPreview.innerHTML = '';
            img.src = window.URL.createObjectURL( new Blob([imageBuffer], {type: mimeType.mime}) );
            thumbnail = { data: imageBuffer, mimeType: mimeType.mime }
            thumbPreview.append(img);
          }
        }
      });

      registerBookmark.addEventListener('click', () => {

        if ( !validationString('url', urlInput.value) ) return;
        if ( titleInput.value == '' ) return;

        const selectLabels = CleePIX.liveDom.addBookmark.querySelector<HTMLSpanElement>('span.selected-label')!;
        if ( selectLabels.childElementCount === 0 ) return;

        window.electron.ipcRenderer.invoke('register-bookmark', {
          instanceId: CleePIX.currentInstanceId,
          bookmark: {
            url: urlInput.value, title: titleInput.value,
            description: descriptionInput.value, data: null,
            memo: memoInput.value != '' ?  memoInput.value : null,
            thunb: thumbnail?.data ? thumbnail.data : null,
            thunb_mime: thumbnail?.mimeType ? thumbnail.mimeType : null
          },
          tags: [...selectLabels.childNodes].map(tag => Number( (<HTMLSpanElement>tag).dataset.id ))
        }).then((result) => {
          if ( result ) {
            urlInput.value = '';
            titleInput.value = '';
            descriptionInput.value = '';
            thumbPreview.innerHTML = noThumbElement;
            memoInput.value = '';
            imageURL = null;
            thumbnail = null;

            console.log(result);

            CleePIX.liveDom.addBookmark.querySelector<HTMLButtonElement>('button.modal-close')?.click();
          }
        });
      });

      function setThumbnailGeneral( url: string | null ) {

        const img = document.createElement('img');
        img.alt = 'サムネイル画像のプレビュー';
        thumbPreview.innerHTML = '';

        if ( url ) {
          window.electron.ipcRenderer.invoke('get-webpage-image', url)
            .then((response) => {
              if ( response ) {
                img.src = window.URL.createObjectURL( new Blob([response.data], {type: response.mimeType}) );
                thumbnail = response;
                thumbPreview.append(img);
              }else thumbPreview.innerHTML = noThumbElement;
            });
        }else thumbPreview.innerHTML = noThumbElement;
      }

      function setThumbnailScreenshot( button?: HTMLButtonElement ) {

        window.electron.ipcRenderer.invoke('get-dom-screenshot', urlInput.value)
          .then((image) => {
            const img = document.createElement('img');
            img.src = window.URL.createObjectURL( new Blob([image], { type: 'image/png' }) );
            img.alt = 'サムネイル画像のプレビュー';
            thumbPreview.innerHTML = '';
            thumbPreview.append( img );
            thumbnail = { data: image, mimeType: 'image/png' }

            if ( button ) button.disabled = false;
          });
      }

      CleePIX.liveDom.instancePanel.insertAdjacentElement('afterend', CleePIX.liveDom.addBookmark);
    },

    addRssFeed: function () {

      this.commonModalWindow(
        '#show-rss-feed-modal-btn', CleePIX.liveDom.addRssFeed,
        '.add-rss-feed-modal-wrap', '#add-rss-feed-btn'
      );

      CleePIX.liveDom.instancePanel.insertAdjacentElement('afterend', CleePIX.liveDom.addRssFeed);
    },

    addText: function () {

      this.commonModalWindow(
        '#show-text-modal-btn', CleePIX.liveDom.addText,
        '.add-text-modal-wrap', '#add-text-title'
      );

      CleePIX.liveDom.instancePanel.insertAdjacentElement('afterend', CleePIX.liveDom.addText);
      new Quill('#show-add-text-field', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{header: [1, 2, false]}],
            ['bold', 'italic', 'underline'],
            ['image', 'video', 'code-block']
          ]
        },
        placeholder: 'ここに本文を入力'
      });
    },

    addTagBlock: function () {

      [
        {liveDom: CleePIX.liveDom.addBookmark, inputId: 'add-bookmark-tags'},
        {liveDom: CleePIX.liveDom.addRssFeed, inputId: 'add-rss-tags'}
      ].forEach(target => {

        target.liveDom.querySelector<HTMLDivElement>('div.form.tags')
          ?.insertAdjacentElement('beforeend', includeDom.addTagBlock(target.inputId));

        const tag_suggest = target.liveDom
          .querySelector<HTMLSpanElement>('span.tag_suggest')!;
        const selected_label = target.liveDom
          .querySelector<HTMLSpanElement>('span.selected-label');
        const suggest_btn: {
          isFirst: Boolean,
          doms: HTMLButtonElement[],
          selected: {id: String | null, name: string | null;};
        } = {
          isFirst: true, doms: [], selected: {id: null, name: null}
        };
        let arrayNumber: number = 0;
        const addTagLabel = (id: string, name: string, e: KeyboardEvent): void => {
          if ( selected_label?.querySelector(`span.label[data-id="${id}"]`) ) return;

          const labelBtn = document.createElement('span');
          labelBtn.classList.add('label');
          labelBtn.textContent = name;
          labelBtn.dataset.id = id;
          labelBtn.dataset.name = name;

          const delButton = document.createElement('button');
          delButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
          delButton.ariaLabel = '削除';
          delButton.addEventListener('click', () => { labelBtn.remove() });

          (<HTMLInputElement> e.target).value = '';
          setTimeout(() => {(<HTMLInputElement> e.target).focus();}, 300);
          labelBtn.appendChild( delButton );
          selected_label?.append(labelBtn);
        };

        let tabKeyCansel: boolean = false;
        target.liveDom.querySelector<HTMLDivElement>('input.tag_input')
          ?.addEventListener('keydown', e => {

            if (e.code === 'Tab' && tabKeyCansel == true) e.preventDefault();
          });

        target.liveDom.querySelector<HTMLDivElement>('input.tag_input')
          ?.addEventListener('keyup', e => {

            if ( e.isComposing ) return;
            if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
              if (suggest_btn.isFirst === true && e.code === 'ArrowDown') {
                suggest_btn.doms[arrayNumber].style.backgroundColor = '#555555';
                suggest_btn.isFirst = false;
              } else if (suggest_btn.isFirst === true && e.code === 'ArrowUp') {
                suggest_btn.doms[arrayNumber = suggest_btn.doms.length - 1].style.backgroundColor = '#555555';
                suggest_btn.isFirst = false;
              } else if (suggest_btn.isFirst === false && e.code === 'ArrowDown') {
                suggest_btn.doms[arrayNumber].style.removeProperty('background-color');
                suggest_btn.doms[suggest_btn.doms.length - 1 > arrayNumber++ ? arrayNumber : (arrayNumber = 0)].style.backgroundColor = '#555555';
              } else if (suggest_btn.isFirst === false && e.code === 'ArrowUp') {
                suggest_btn.doms[arrayNumber].style.removeProperty('background-color');
                suggest_btn.doms[(suggest_btn.doms.length > arrayNumber && arrayNumber > 0) ? (arrayNumber -= 1) : (arrayNumber = suggest_btn.doms.length - 1)].style.backgroundColor = '#555555';
              }
            } else if (e.code === 'Tab') {
              if (tabKeyCansel === true) {
                addTagLabel(suggest_btn.doms[arrayNumber].dataset.id!, suggest_btn.doms[arrayNumber].dataset.name!, e);
              }
              tag_suggest.innerHTML = ''; tag_suggest.style.opacity = '0'; tag_suggest.inert = true; tabKeyCansel = false;
            } else if ( e.code === 'Backspace' && (<HTMLInputElement> e.target)!.value == '' ) {
              if ( selected_label!.childElementCount > 0 ) {
                [...selected_label!.childNodes].slice(-1)[0].remove();
              }
            } else if ((<HTMLInputElement> e.target)!.value != '') {
              tag_suggest.innerHTML = ''; tabKeyCansel = true;
              tag_suggest.inert = false; tag_suggest.style.opacity = '1';
              window.electron.ipcRenderer
                .invoke('get-add-tag-list', {
                  id: CleePIX.currentInstanceId,
                  keyword: (<HTMLInputElement> e.target)!.value
                })
                .then((res) => {
                  suggest_btn.isFirst = true;
                  suggest_btn.doms = [];
                  arrayNumber = 0;
                  res.forEach(row => {
                    const button = document.createElement('button');
                    button.textContent = row.name;
                    button.dataset.name = row.name;
                    button.dataset.id = row.id;
                    button.tabIndex = -1;
                    button.addEventListener('click', () => {
                      addTagLabel(row.id, row.name, e);
                      tag_suggest.innerHTML = '';
                      tag_suggest.style.opacity = '0';
                      tag_suggest.inert = true;
                    });
                    suggest_btn.doms.push(button);
                    tag_suggest.append(button);
                  });
                });
            } else if ((<HTMLInputElement> e.target)!.value == '') {
              tag_suggest.style.opacity = '0'; tabKeyCansel = false;
              tag_suggest.inert = true; tag_suggest.innerHTML = '';
            } else {
              tag_suggest.style.opacity = '1';
              tag_suggest.inert = false; tabKeyCansel = true;
            }
          });
      });
    },

    commonModalWindow: function (click_id, domPram, wrapClass, focus_id = null) {

      CleePIX.liveDom.base.querySelector(click_id)!
        .addEventListener('click', () => {

          domPram.inert = false;
          CleePIX.liveDom.instancePanel.inert = true;
          domPram
            .querySelector<HTMLDivElement>(wrapClass)
            ?.classList.add('show');
          setTimeout(() => {
            domPram.querySelector<HTMLButtonElement>(
              focus_id === null ? click_id : focus_id
            )?.focus();
          }, 600);
        });

      domPram
        .querySelector<HTMLDivElement>(wrapClass)
        ?.addEventListener('click', () => {
          instancePanelHide();
        });

      domPram.addEventListener('keydown', e => {
        if (e.key === 'Escape') instancePanelHide();
      });

      const modalClose = domPram.querySelector<HTMLButtonElement>('button.modal-close');
      if (modalClose !== null) {
        modalClose.addEventListener('click', () => {
          instancePanelHide();
        });
      }

      function instancePanelHide(): void {

        domPram.inert = true;
        CleePIX.liveDom.instancePanel.inert = false;
        domPram
          .querySelector<HTMLDivElement>(wrapClass)
          ?.classList.remove('show');
        CleePIX.liveDom.instancePanel
          .querySelector<HTMLButtonElement>(click_id)?.focus();
      }
    },

    tagTreePanel: async function () {

      let currentTagNameWrap: { [key: number]: HTMLSpanElement } | null = null;
      const setTagEvent: (
        target: {
          expansionButtonList: HTMLButtonElement[],
          tagNameButtonList: HTMLButtonElement[],
          tagMenuButtonList: HTMLButtonElement[];
        },
        isFirst?: boolean
      ) => void = (target, isFirst = false) => {

        if (target.expansionButtonList[0].dataset.tagId === 'none') return;

        target.expansionButtonList.forEach((button, index) => {

          const li = <HTMLLIElement> button.parentNode?.parentNode;

          button.addEventListener('click', async () => {

            if (button.dataset.loaded === 'false' || isFirst === false) {
              button.dataset.loaded = 'true';
              await getTagTree(li, CleePIX.currentInstanceId, Number(button.dataset.tagId));
            }

            const subUl = li.querySelector<HTMLUListElement>('ul.tag-tree')!;
            if (button.dataset.opend === 'false') {
              subUl.classList.add('show');
              subUl.style.height = `${subUl.scrollHeight}px`;
              setTimeout(() => {subUl.style.height = 'auto';}, 250);
              subUl.inert = false;
              button.dataset.opend = 'true';
              button.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            } else {
              subUl.classList.remove('show');
              subUl.style.height = `${subUl.scrollHeight}px`;
              setTimeout(() => {subUl.style.height = '0';}, 5);
              subUl.inert = true;
              button.dataset.opend = 'false';
              button.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            }
          });

          li.addEventListener('mouseover', (e) => {
            e.stopPropagation();
            target.tagMenuButtonList[index].hidden = false;
          });

          li.addEventListener('mouseout', (e) => {
            e.stopPropagation();
            target.tagMenuButtonList[index].hidden = true;
          });
        });

        target.tagNameButtonList.forEach(button => {

          button.addEventListener('click', () => {

            CleePIX.shareParts.toggleLoadingEfect( true );
            if (currentTagNameWrap && currentTagNameWrap[ CleePIX.currentInstanceId ]) {
              currentTagNameWrap[ CleePIX.currentInstanceId ].style.removeProperty('background-color');
            }else if ( currentTagNameWrap === null ) {
              currentTagNameWrap = {}
            }
            const buttonWrap = <HTMLSpanElement> button.parentNode;
            buttonWrap.style.backgroundColor = '#414141';
            currentTagNameWrap[ CleePIX.currentInstanceId ] = buttonWrap;

            let tagIdChain: number[] = [];
            let parentTagId: number = 1;
            let tmpDom: HTMLElement = button;
            while (parentTagId > 0) {
              if (tmpDom.tagName === 'LI') {
                if (parentTagId > 0 && tmpDom.dataset.parentTagId !== undefined) {
                  parentTagId = Number(tmpDom.dataset.parentTagId);
                  if ( parentTagId > 0 ) tagIdChain.push(parentTagId);
                }
              }
              tmpDom = <HTMLElement> tmpDom.parentNode;
            }

            tagIdChain.push( Number( button.dataset.tagId ) );

            window.electron.ipcRenderer
              .invoke('get-bookmarks', { instanceId: CleePIX.currentInstanceId, tagIdChain })
              .then( CleePIX.shareParts.getBookmarkItemDom );
          });
        });

        const showMenuDomWrap = CleePIX.liveDom.base.querySelector<HTMLDivElement>('div#show-tag-context-menu-wrap')!;
        const showMenuDom = CleePIX.liveDom.base.querySelector<HTMLDivElement>('div#show-tag-context-menu')!;

        target.tagMenuButtonList.forEach((button, index) => {

          button.addEventListener('click', () => {

            const tagMenuElement = document.createElement('ul');
            tagMenuElement.classList.add('tag-menu-element');
            [
              {class: 'name-change', name: '名前を変更'},
              {class: 'delete-tag', name: '削除'},
              {class: 'add-new-tag', name: '新規タグ追加'}
            ].forEach(item => {

              const li = document.createElement('li');
              li.classList.add(item.class, 'tag-menu');
              li.textContent = item.name;
              li.dataset.tagId = button.dataset.tagId;
              li.tabIndex = 0;
              li.role = 'button';

              const targetLi = <HTMLLIElement> target.tagNameButtonList[index].parentNode?.parentNode;
              let subUl = targetLi.querySelector<HTMLUListElement>('ul.tag-tree');
              switch (item.class) {
                case 'add-new-tag':
                  li.addEventListener('click', async () => {
                    if (subUl === null) {
                      await getTagTree(targetLi, CleePIX.currentInstanceId, Number(button.dataset.tagId));
                      subUl = targetLi.querySelector<HTMLUListElement>('ul.tag-tree.sub')!;
                    }
                    target.expansionButtonList[index].dataset.loaded = 'true';
                    if (target.expansionButtonList[index].dataset.opend === 'false') {
                      target.expansionButtonList[index].dataset.opend = 'true';
                      subUl.classList.add('show');
                      subUl.style.height = `${subUl.scrollHeight}px`;
                      setTimeout(() => {subUl!.style.height = 'auto';}, 250);
                      subUl.inert = false;
                    }
                    insertNewTag(subUl, Number(button.dataset.tagId));
                    showMenuDomWrap.hidden = true;
                    showMenuDom.hidden = true;
                  });
                  break;
                case 'name-change':
                  li.addEventListener('click', () => {
                    insertNewTag(subUl, Number(button.dataset.tagId), true, targetLi);
                    showMenuDomWrap.hidden = true;
                    showMenuDom.hidden = true;
                  });
                  break;
              }

              tagMenuElement.append(li);
            });

            showMenuDom.innerHTML = '';
            showMenuDom.append(tagMenuElement);

            const pos = button.getBoundingClientRect();
            showMenuDom.style.top = `${pos.top}px`;
            showMenuDom.style.left = `${pos.left + pos.width}px`;

            showMenuDomWrap.hidden = false;
            showMenuDom.hidden = false;
          });
        });

        showMenuDomWrap.addEventListener('click', () => {

          showMenuDomWrap.hidden = true;
          showMenuDom.hidden = true;
        });
      };

      function initTagTreeUl(isRoot: boolean = false, instanceId: number): HTMLUListElement {

        const ul = document.createElement('ul');
        isRoot === true ? ul.classList.add('tag-tree', 'animate__animated')
          : ul.classList.add('tag-tree', 'sub');
        ul.dataset.instanceId = `${instanceId}`;
        ul.tabIndex = 0;
        ul.role = isRoot === true ? 'tree' : 'group';
        ul.ariaLabel = 'タグ選択ツリー';

        return ul;
      }

      function setDragEventLi(targetLi: HTMLLIElement) {

        targetLi.addEventListener('dragstart', (e) => {
          if (targetLi.dataset.tagId !== 'none') e.dataTransfer!.setData('text/plain', (<HTMLLIElement> e.target).id);
        });
        targetLi.addEventListener('dragover', (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.dataTransfer!.dropEffect = 'move';
          targetLi.style.borderTop = '1px solid #cccccc';
          targetLi.parentElement!.style.backgroundColor = '#2d2d2d';
        });
        targetLi.addEventListener('dragleave', (e) => {
          e.preventDefault();
          e.stopPropagation();
          targetLi.style.borderTop = 'unset';
          targetLi.parentElement!.style.backgroundColor = 'unset';
        });
        targetLi.addEventListener('drop', (e) => {
          e.preventDefault();
          e.stopPropagation();
          targetLi.style.borderTop = 'unset';

          const ul = <HTMLUListElement> targetLi.parentElement!;
          ul.style.backgroundColor = 'unset';

          let itemId: string = '';
          if (e.dataTransfer!.items) {
            for (const item of e.dataTransfer!.items) {
              const {kind, type} = item;
              if (kind === 'file') {
                // Do nothing - item is file
              } else if (kind === 'string') {
                if (type === 'text/plain') {
                  itemId = e.dataTransfer!.getData(type);
                }
              }
            }
          }

          if (itemId !== '') {
            const rootUl = CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId];
            const dragTarget = rootUl.querySelector<HTMLLIElement>(`#${itemId}`)!;
            const dragTargetButton = dragTarget.querySelector<HTMLButtonElement>('button.tag-name')!;
            const hitDragTarget = ul.querySelector<HTMLButtonElement>(`button[data-parent-tag-id="${dragTarget.dataset.parentTagId}"][data-tag-id="${dragTarget.dataset.tagId}"]`);
            if (hitDragTarget === null && targetLi.dataset.tagId !== 'none') {
              window.electron.ipcRenderer
                .invoke('update-tag-structure', {
                  instanceId: CleePIX.currentInstanceId,
                  delete: {parentId: dragTarget.dataset.parentTagId, childId: dragTarget.dataset.tagId},
                  set: {parentId: ul.dataset.parentTagId, childId: dragTarget.dataset.tagId}
                }).then(res => {
                  if (res === true) {
                    dragTarget.dataset.parentTagId = ul.dataset.parentTagId;
                    dragTargetButton.dataset.parentTagId = ul.dataset.parentTagId;
                  }
                });
            }
            ul.insertBefore(dragTarget, targetLi);
            if (targetLi.dataset.tagId === 'none') {
              targetLi.remove();
            }
          }
        });
      }

      function createTreeItem(id: Number, name: string): [
        li: HTMLLIElement, expansionButton: HTMLButtonElement,
        tagNameButton: HTMLButtonElement, tagMenuButton: HTMLButtonElement
      ] {

        const li = document.createElement('li');
        li.role = 'treeitem';
        li.id = `item-tag-${id}`;
        li.dataset.tagId = `${id}`;
        li.draggable = true;
        setDragEventLi(li);

        const buttonWrap = document.createElement('span');
        buttonWrap.classList.add('for-hover');
        const expansionButton = document.createElement('button');
        const tagNameButton = document.createElement('button');
        const tagMenuButton = document.createElement('button');

        expansionButton.classList.add('expansion');
        expansionButton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        expansionButton.dataset.opend = 'false';
        expansionButton.dataset.tagId = `${id}`;

        tagNameButton.classList.add('tag-name');
        tagNameButton.textContent = name;
        tagNameButton.dataset.tagId = `${id}`;

        tagMenuButton.classList.add('tag-menu-btn');
        tagMenuButton.hidden = true;
        tagMenuButton.dataset.tagId = `${id}`;
        tagMenuButton.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';
        tagMenuButton.ariaLabel = 'このタグのメニューを開く';

        buttonWrap.append(expansionButton);
        buttonWrap.append(tagNameButton);
        buttonWrap.append(tagMenuButton);
        li.append(buttonWrap);

        return [li, expansionButton, tagNameButton, tagMenuButton];
      }

      const getTagTree = async (
        target: HTMLLIElement | null, instanceId: number, parentId: number
      ): Promise<{[key: string]: HTMLButtonElement[] | HTMLUListElement[] | null;}> => {

        return new Promise(async (resolve) => {

          let treeItems: any = null;
          while (treeItems === null) {
            if (target === null) {
              treeItems = await window.electron.ipcRenderer.invoke('get-tag-tree', instanceId);
            } else {
              treeItems = await window.electron.ipcRenderer
                .invoke('get-sub-tags', {instanceId, parentId});
            }
          }

          const isRoot = target === null ? true : false;
          const ul = initTagTreeUl(isRoot, instanceId);

          const expansionButtonList: HTMLButtonElement[] = [];
          const tagNameButtonList: HTMLButtonElement[] = [];
          const tagMenuButtonList: HTMLButtonElement[] = [];
          if (treeItems.length !== 0) {
            treeItems.forEach(tag => {

              const [
                li, expansionButton, tagNameButton, tagMenuButton
              ] = createTreeItem(Number(tag.id), tag.name);

              expansionButton.dataset.loaded = target === null ? 'true' : 'false';

              insertAttrTreeItem(isRoot, parentId, li, tagNameButton);

              expansionButtonList.push(expansionButton);
              tagNameButtonList.push(tagNameButton);
              tagMenuButtonList.push(tagMenuButton);
              ul.append(li);
            });
          } else {
            const li = document.createElement('li');
            li.role = 'treeitem';
            li.dataset.tagId = 'none';
            const button = document.createElement('button');
            button.style.paddingLeft = '15px';
            button.dataset.tagId = 'none';
            button.textContent = '登録無し';
            setDragEventLi(li);

            expansionButtonList.push(button);
            li.append(button);
            ul.append(li);
          }

          ul.dataset.parentTagId = '0';
          if (isRoot === true) ul.style.height = '100%';

          if (target === null) {

            if (CleePIX.currentInstanceId !== instanceId) {
              ul.classList.add('animate__fadeOutRight');
              ul.inert = true;
            } else ul.classList.add('animate__fadeInLeft');

            setTagEvent({
              expansionButtonList, tagNameButtonList, tagMenuButtonList
            }, true);

            CleePIX.liveDom.tagTreePanel[instanceId] = ul;
            CleePIX.liveDom.instancePanel
              .querySelector<HTMLDivElement>('div.tag-select-panel')!
              .insertAdjacentElement('beforeend', ul);
          } else {
            ul.inert = true;
            ul.dataset.parentTagId = `${parentId}`;
            ul.classList.add('sub');
            target.insertAdjacentElement('beforeend', ul);
            setTagEvent({
              expansionButtonList, tagNameButtonList, tagMenuButtonList
            }, true);
          }

          resolve({expansionButtonList, tagNameButtonList, tagMenuButtonList});
        });
      };

      function insertAttrTreeItem(
        isRoot: boolean, parentTagId: number, targetLi: HTMLLIElement,
        targetTagNameButton: HTMLButtonElement
      ) {
        if (isRoot === false) {
          targetTagNameButton.dataset.parentTagId = `${parentTagId}`;
          targetLi.dataset.parentTagId = `${parentTagId}`;
        } else {
          targetTagNameButton.dataset.parentTagId = '0';
          targetLi.dataset.parentTagId = '0';
        }
      }

      function createTagForm(isUpdate: boolean = false): [li: HTMLLIElement, form: HTMLFormElement, input: HTMLInputElement] {

        const li = document.createElement('li');
        const form = document.createElement('form');
        const input = document.createElement('input');

        li.role = 'treeitem';
        isUpdate === false ? form.classList.add('insert-tag-form') : form.classList.add('update-tag-form');
        form.addEventListener('submit', e => {e.preventDefault();});
        form.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
        input.type = 'text';

        form.append(input);
        li.append(form);

        return [li, form, input];
      }

      function insertNewTag(targetUl: HTMLUListElement | null = null,
        tagId: number | null = null, isUpdate: boolean = false, targetLi?: HTMLLIElement): void {

        const [li, form, input] = createTagForm(isUpdate);

        const isRoot = targetUl === null ? true : false;
        if (targetUl === null) targetUl = CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId];

        input.addEventListener('keydown', async (e) => {
          if (e.code === 'Enter' && e.isComposing === false) {
            if (isUpdate === false) {
              let isHitTagName: boolean = false;
              [...targetUl!.querySelectorAll(`button.tag-name[data-parent-tag-id='${tagId === null ? 0 : tagId}']`)]
                .forEach(tagNameButton => {
                  if (tagNameButton.textContent === input.value) {
                    isHitTagName = true; return;
                  }
                });
              if (isHitTagName !== false) return;
              window.electron.ipcRenderer
                .invoke('add-tag', {
                  instanceId: CleePIX.currentInstanceId,
                  name: input.value, parentTagId: tagId
                }).then(res => {
                  if (res !== null) {
                    const AddedTagId = res.id !== undefined ? res.id : res.lastInsertRowid;
                    const [
                      insertLi, expansionButton, tagNameButton, tagMenuButton
                    ] = createTreeItem(AddedTagId, input.value);
                    expansionButton.dataset.loaded = 'false';
                    setTagEvent({
                      expansionButtonList: [expansionButton],
                      tagNameButtonList: [tagNameButton],
                      tagMenuButtonList: [tagMenuButton]
                    });
                    insertAttrTreeItem(isRoot, tagId!, insertLi, tagNameButton);
                    targetUl?.insertAdjacentElement('beforeend', insertLi);
                    if (targetUl!.childElementCount <= 3) {
                      targetUl!.querySelector('li > button[data-tag-id="none"]')
                        ?.parentElement?.remove();
                    }
                    li.remove();
                  }
                });
            } else {
              window.electron.ipcRenderer
                .invoke('update-tag-name', {
                  instanceId: CleePIX.currentInstanceId,
                  name: input.value, tagId: tagId
                }).then(res => {
                  if (res !== null) {
                    const tagNameButton = targetLi?.querySelector('button.tag-name')!;
                    tagNameButton.textContent = input.value;
                    [...CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId]
                      .querySelectorAll(`button.tag-name[data-tag-id='${tagId}']`)]
                      .forEach(tagNameButton => {tagNameButton.textContent = input.value;});
                    form.remove();
                  }
                });
            }
          }
        });
        input.addEventListener('keyup', async (e) => {
          if (
            e.isComposing === false && input.value !== '' &&
            e.code !== 'Backspace' && e.code !== 'ArrowLeft' && e.code !== 'ArrowRight'
          ) {
            const suggest = await window.electron.ipcRenderer
              .invoke('add-tag-suggest', {id: CleePIX.currentInstanceId, value: input.value});
            if (suggest !== undefined) {
              const strlen = input.value.length;
              input.value = suggest.name;
              input.selectionStart = strlen;
              input.selectionEnd = suggest.name.length;
              input.focus();
            }
          }
        });
        input.addEventListener('focusout', () => {
          if (isUpdate === false) {
            li.remove();
          } else form.remove();
        });

        if (isUpdate === false) {
          targetUl.insertAdjacentElement('afterbegin', li);
        } else {
          const tagName = targetLi?.querySelector('button.tag-name')?.textContent;
          input.value = tagName!;
          targetLi?.append(form);
        }

        input.focus();
      }

      function setTagTreeCache(): void {
        const tagTreeCache: {[key: number]: string;} = {};
        for (const [key, ul] of Object.entries(CleePIX.liveDom.tagTreePanel)) {
          tagTreeCache[key] = ul.outerHTML;
        }
        let selectedTags: {[key: number]: number} | null = null;
        if ( currentTagNameWrap ) {
          for ( const [instanceId, span] of Object.entries(currentTagNameWrap) ) {
            if ( selectedTags === null ) selectedTags = {};
            const button = span.querySelector<HTMLButtonElement>('button.tag-name')!;
            selectedTags[ instanceId ] = Number( button.dataset.tagId );
          }
        }
        window.electron.ipcRenderer.invoke('set-tag-tree-cache', { tagTreeCache, selectedTags });
      }

      CleePIX.liveDom.instancePanel
        .querySelector<HTMLDivElement>('div.tag-select-panel')!
        .addEventListener('click', () => { setTagTreeCache() });

      CleePIX.liveDom.instancePanel
        .querySelector<HTMLButtonElement>('#add-new-tag')!
        .addEventListener('click', () => {insertNewTag();});

      if (CleePIX.config.cache?.tagTreeDomStrings !== null) {
        const expansionButtonList: HTMLButtonElement[] = [];
        const tagNameButtonList: HTMLButtonElement[] = [];
        const tagMenuButtonList: HTMLButtonElement[] = [];
        const tagSelectPanel = CleePIX.liveDom.instancePanel
          .querySelector<HTMLDivElement>('div.tag-select-panel')!;
        for (const [key, ul] of Object.entries(CleePIX.config.cache!.tagTreeDomStrings)) {
          tagSelectPanel.insertAdjacentHTML('beforeend', ul);
          const tagTree = tagSelectPanel.querySelector<HTMLUListElement>(`ul[role='tree'][data-instance-id='${key}']`)!;
          CleePIX.liveDom.tagTreePanel[Number(key)] = tagTree;
          expansionButtonList.push(...tagTree.querySelectorAll<HTMLButtonElement>('button.expansion'));
          tagNameButtonList.push(...tagTree.querySelectorAll<HTMLButtonElement>('button.tag-name'));
          tagMenuButtonList.push(...tagTree.querySelectorAll<HTMLButtonElement>('button.tag-menu-btn'));

          [...tagTree.querySelectorAll<HTMLLIElement>(`li[role='treeitem']`)].forEach((li) => {setDragEventLi(li);});
        }

        if ( CleePIX.config.cache && CleePIX.config.cache.selectedTags ) {
          Object.entries( CleePIX.config.cache.selectedTags ).forEach((selectedTag) => {
            const tagNameButton = CleePIX.liveDom.instancePanel
                .querySelector<HTMLButtonElement>(`div.tag-select-panel button.tag-name[data-tag-id='${selectedTag[1]}']`);
            if ( !currentTagNameWrap ) currentTagNameWrap = {};
            if ( tagNameButton && tagNameButton.parentNode ) {
              currentTagNameWrap[ Number( selectedTag[0] ) ] = <HTMLSpanElement>tagNameButton.parentNode;
            }
          });
        }

        setTagEvent({expansionButtonList, tagNameButtonList, tagMenuButtonList});
      } else {
        CleePIX.instanceDBs.forEach(db => {
          getTagTree(null, db.id, 0).then(res => {
            res.expansionButtonList!.forEach(button => {
              getTagTree(<HTMLLIElement> (button.parentNode?.parentNode), db.id, Number(button.dataset.tagId));
            });
          });
        });
      }

      window.addEventListener('ite_change', async (e) => {
        if (CleePIX.liveDom.tagTreePanel[e.detail.id] !== undefined) {
          CleePIX.liveDom.tagTreePanel[e.detail.id].classList.replace('animate__fadeInLeft', 'animate__fadeOutRight');
          CleePIX.liveDom.tagTreePanel[e.detail.id].inert = true;
        }
        if (CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId] === undefined) {
          await getTagTree(null, CleePIX.currentInstanceId, 0).then(res => {
            res.expansionButtonList!.forEach(button => {
              getTagTree(<HTMLLIElement> (button.parentNode?.parentNode), CleePIX.currentInstanceId, Number(button.dataset.tagId));
            });
          });
        }
        CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId].classList.replace('animate__fadeOutRight', 'animate__fadeInLeft');
        CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId].inert = false;
        //console.log(CleePIX.currentInstanceId);
      }, false);

      const resizePanelBar = CleePIX.liveDom.instancePanel
        .querySelector<HTMLSpanElement>('span.resize-panel-bar')!;
      const tagSelectPanel = CleePIX.liveDom.instancePanel
        .querySelector<HTMLDivElement>('div.tag-select-panel')!;
      const panelResizing = (e: MouseEvent): void => {
        tagSelectPanel.style.flexBasis = `${e.x}px`;
      };
      resizePanelBar.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', panelResizing, false);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', panelResizing, false);
        }, false);
      });
    },

    addContents: function () {

      CleePIX.shareParts.toggleLoadingEfect( true );
      window.electron.ipcRenderer
        .invoke('get-bookmarks', { instanceId: CleePIX.currentInstanceId, tagIdChain: null })
        .then( CleePIX.shareParts.getBookmarkItemDom );

      CleePIX.liveDom.instancePanel.querySelector<HTMLDivElement>('div.contents-panel')!
        .appendChild(CleePIX.liveDom.contentsPanel.base);
    }
  },

  shareParts: {

    getBookmarkItemDom: function ( bookmarks ) {

      const insertCe = CleePIX.liveDom.contentsPanel.base.querySelector<HTMLDivElement>('div#insert-ce')!;
      insertCe.innerHTML = "";
      bookmarks.forEach(( bookmark ) => {
        const bookmarkItem = includeDom.contentsPanel.bookmarkItem();
        const thumbnail = bookmarkItem.querySelector<HTMLDivElement>('div.thumbnail')!;
        const link = bookmarkItem.querySelector<HTMLLinkElement>('a.link')!;
        const description = bookmarkItem.querySelector<HTMLParagraphElement>('p.description')!;

        if ( bookmark.thunb ) {
          const image = document.createElement('img');
          image.src = window.URL.createObjectURL( new Blob([bookmark.thunb], { type: bookmark.thunb_mime }) );
          image.alt = 'サムネイル画像';
          thumbnail.appendChild( image );
        }else {
          const span = document.createElement('span');
          span.classList.add('no-thumbnail');
          span.textContent = 'No thumbnail';
          thumbnail.appendChild( span );
        }

        link.href = bookmark.url;
        link.textContent = bookmark.title;

        let descriptionString: string = '';
        if ( bookmark.description && bookmark.description.length > 85 ) {
          descriptionString = (<string>bookmark.description).substring(0, 85) + '...';
        }else descriptionString = bookmark.description;
        description.textContent = descriptionString;

        insertCe.appendChild( bookmarkItem );
      });

      CleePIX.shareParts.toggleLoadingEfect( false );
    },

    toggleLoadingEfect: function ( toggle ) {

      const main = CleePIX.liveDom.base.querySelector('main');
      const showLoadingEfect = CleePIX.liveDom.base.querySelector<HTMLDivElement>('#show-loading-efect');

      if ( toggle === true ) {
        main!.inert = true;
        showLoadingEfect!.inert = false;
        showLoadingEfect!.classList.add('show');
      }else {
        main!.inert = false;
        showLoadingEfect!.inert = true;
        showLoadingEfect!.classList.remove('show');
      }
    }
  }
}

function validationString( type: 'url' | 'mail', str: string ): boolean {

  switch ( type ) {
    case 'url':
      return str.match(/https?:\/[\w!?/+\-_~;.,*&@#$%()'[\]]+/) ? true : false;
    case 'mail':
      return str.match(/[\w\-\._]+@[\w\-\._]+\.[A-Za-z]+/) ? true : false;
  }
}

// App init.
window.app = CleePIX;
window.addEventListener('DOMContentLoaded', () => {CleePIX.init();});