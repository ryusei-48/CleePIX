import "@fortawesome/fontawesome-free/js/all";
import "animate.css";
import "../../../node_modules/quill/dist/quill.snow.css";
import Quill from "quill";
import "../../preload/index.d";
import { includeDom } from "./include.dom";
import { resolve } from "path";

declare global {
  interface WindowEventMap {
    "ite_change": CustomEvent<{ id: number }>
  }
}

export const CleePIX: {

  init: () => void, currentInstanceId: number,
  instanceDBs: { label: string, id: number, path: string }[],
  instanceLabels: string[], windowControl: () => void,
  instancePanelControl: {
    addInstance: () => void, addBookmark: () => void,
    addRssFeed: () => void, addText: () => void,
    commonModalWindow: (
      click_id: string, domPram: HTMLDivElement,
      wrapClass: string, focus_id: string | null
    ) => void, addTagBlock: () => void, tagTreePanel: () => void
  }
  liveDom: {
    base: HTMLDivElement, instancePanel: HTMLDivElement,
    addInstance: HTMLDivElement,
    addBookmark: HTMLDivElement, addRssFeed: HTMLDivElement,
    addText: HTMLDivElement, addTagBlock: HTMLDivElement,
    tagTreePanel: { [key: number]: HTMLUListElement }
  }

} = {

  currentInstanceId: 0, instanceLabels: ['default'],
  instanceDBs: [],
  liveDom: {
    base: includeDom.base(), instancePanel: includeDom.instancePanel(),
    addInstance: includeDom.addInstance(),
    addBookmark: includeDom.addBookmarkSeelector(),
    addRssFeed: includeDom.addRssFeedSeelector(),
    addText: includeDom.addTextSelector(),
    addTagBlock: includeDom.addTagBlock(),
    tagTreePanel: {}
  },

  init: function () {

    window.electron.ipcRenderer.invoke('get-instance-db').then(dbs => {

      this.instanceDBs = dbs;
      this.windowControl();
      this.instancePanelControl.addInstance();
      this.instancePanelControl.addBookmark();
      this.instancePanelControl.addRssFeed();
      this.instancePanelControl.addText();
      this.instancePanelControl.addTagBlock();
      this.instancePanelControl.tagTreePanel();

      const script = document.createElement('script');
      //script.src = "https://platform.twitter.com/widgets.js";
      script.type = 'application/javascript';
      script.src = 'https://embed.nicovideo.jp/watch/sm41943302/script?w=640&h=360';
      document.body.appendChild(script);

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

    window.electron.ipcRenderer.on('instance-update', (_, ites) => {
      this.instanceDBs = ites;
      window.dispatchEvent(new CustomEvent('ite_change', { detail: CleePIX.currentInstanceId }));
    });
  },

  instancePanelControl: {

    addInstance: function () {

      this.commonModalWindow(
        '#show-inscetance-modal-btn', CleePIX.liveDom.addInstance,
        '.instance-select-element-wrap', 'div.instance-names'
      );

      let currentTextInput: HTMLInputElement;
      let textInputList: { [key: string]: HTMLInputElement } = {}
      const addInstanceLavel = (label: string, id: string): void => {

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
            console.log(deleteBtn.outerHTML);
            console.log(textInputList);
            Object.values(textInputList).shift()?.click();
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
        }
        textInput.addEventListener('dblclick', () => { renameInstance() });
        textInput.addEventListener('keydown', e => {
          if (e.key == 'F2') { renameInstance() }
        });
        textInput.addEventListener('change', e => {
          window.electron.ipcRenderer.send('ite-name-update', {
            name: (<HTMLInputElement>e.target).value, id: Number(id)
          });
        });
        textInput.addEventListener('click', e => {
          currentTextInput.style.removeProperty('border-bottom-color');
          currentTextInput.style.removeProperty('background-color');
          (<HTMLInputElement>e.target).style.borderBottomColor = 'lightgreen';
          (<HTMLInputElement>e.target).style.backgroundColor = '#294c29';
          const orldId = CleePIX.currentInstanceId
          CleePIX.currentInstanceId = Number((<HTMLInputElement>e.target).dataset.id);

          window.dispatchEvent(new CustomEvent('ite_change', { detail: { id: orldId } }));

          console.log(CleePIX.currentInstanceId);
          currentTextInput = <HTMLInputElement>e.target;
        });
        textInput.addEventListener('focusout', () => { textInput.readOnly = true });

        if (label === 'default') {
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
      }

      CleePIX.instanceDBs.forEach(db => {
        addInstanceLavel(db.label, `${db.id}`);
      });
      CleePIX.currentInstanceId = 1;

      CleePIX.liveDom.addInstance
        .querySelector<HTMLButtonElement>('#add-instance-btn')
        ?.addEventListener('click', () => {
          window.electron.ipcRenderer.invoke('add-instance')
            .then(res => {
              addInstanceLavel(res.label, `${res.id}`)
            });
        });

      CleePIX.liveDom.instancePanel.insertAdjacentElement('afterend', CleePIX.liveDom.addInstance);
    },

    addBookmark: function () {

      this.commonModalWindow(
        '#show-bookmark-modal-btn', CleePIX.liveDom.addBookmark,
        '.add-bookmark-modal-wrap', '#add-bookmark-title'
      );

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
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'video', 'code-block']
          ]
        },
        placeholder: 'ここに本文を入力'
      });
    },

    addTagBlock: function () {

      [
        { liveDom: CleePIX.liveDom.addBookmark, inputId: 'add-bookmark-tags' },
        { liveDom: CleePIX.liveDom.addRssFeed, inputId: 'add-rss-tags' }
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
          selected: { id: String | null, name: string | null }
        } = {
          isFirst: true, doms: [], selected: { id: null, name: null }
        }
        let arrayNumber: number = 0;
        const addTagLabel = (id: string, name: string, e: KeyboardEvent): void => {
          const labelBtn = document.createElement('button');
          labelBtn.textContent = name;
          labelBtn.dataset.id = id;
          labelBtn.dataset.name = name;
          (<HTMLInputElement>e.target).value = '';
          setTimeout(() => { (<HTMLInputElement>e.target).focus() }, 300);
          selected_label?.append(labelBtn);
        }

        let tabKeyCansel: boolean = false;
        target.liveDom.querySelector<HTMLDivElement>('input.tag_input')
          ?.addEventListener('keydown', e => {

            if (e.code === 'Tab' && tabKeyCansel == true) e.preventDefault();
          });

        target.liveDom.querySelector<HTMLDivElement>('input.tag_input')
          ?.addEventListener('keyup', e => {

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
            } else if ((<HTMLInputElement>e.target)!.value != '') {
              tag_suggest.innerHTML = ''; tabKeyCansel = true;
              tag_suggest.inert = false; tag_suggest.style.opacity = '1';
              window.electron.ipcRenderer
                .invoke('get-add-tag-list', {
                  id: CleePIX.currentInstanceId,
                  keyword: (<HTMLInputElement>e.target)!.value
                })
                .then((res) => {
                  suggest_btn.isFirst = true;
                  suggest_btn.doms = []
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
            } else if ((<HTMLInputElement>e.target)!.value == '') {
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

      CleePIX.liveDom.instancePanel.querySelector(click_id)!
        .addEventListener('click', () => {

          domPram.removeAttribute('inert');
          CleePIX.liveDom.instancePanel.setAttribute('inert', 'true');
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

      function instancePanelHide(): void {

        domPram.setAttribute('inert', 'true');
        CleePIX.liveDom.instancePanel.removeAttribute('inert');
        domPram
          .querySelector<HTMLDivElement>(wrapClass)
          ?.classList.remove('show');
        CleePIX.liveDom.instancePanel
          .querySelector<HTMLButtonElement>(click_id)?.focus();
      }
    },

    tagTreePanel: async function () {

      let currentTagNameWrap: HTMLSpanElement | null = null;
      const setTagEvent: (
        target: { expansionButtonList: HTMLButtonElement[], tagNameButtonList: HTMLButtonElement[] },
        isFirst?: boolean
      ) => void = (target, isFirst = false) => {

        if ( target.expansionButtonList[0].dataset.tagId === 'none' ) return;

        target.expansionButtonList.forEach(button => {

          button.addEventListener('click', async (e) => {

            const li = <HTMLLIElement>button.parentNode?.parentNode;

            if (button.dataset.loaded === 'false' || isFirst === false) {
              button.dataset.loaded = 'true';
              await getTagTree(li, Number(button.dataset.tagId));
            }

            const subUl = li.querySelector('ul')!;
            if (button.dataset.opend === 'false') {
              subUl.hidden = false;
              button.dataset.opend = 'true';
              button.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
            } else {
              subUl.hidden = true;
              button.dataset.opend = 'false';
              button.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
            }
          })
        });

        target.tagNameButtonList.forEach( button => {

          button.addEventListener('click', () => {

            if ( currentTagNameWrap !== null ) {
              currentTagNameWrap.style.removeProperty('background-color');
            }
            const buttonWrap = <HTMLSpanElement>button.parentNode;
            buttonWrap.style.backgroundColor = '#414141';
            currentTagNameWrap = buttonWrap;
          })
        });
      }

      const getTagTree = async (target: HTMLLIElement | null, id: number): Promise<{ [key: string]: HTMLButtonElement[] | null}> => {

        return new Promise(async (resolve) => {

          let treeItems: any = null;
          while (treeItems === null) {
            if (target === null) {
              treeItems = await window.electron.ipcRenderer.invoke('get-tag-tree', id);
            } else {
              treeItems = await window.electron.ipcRenderer
                .invoke('get-sub-tags', {
                  instanceId: CleePIX.currentInstanceId, tagId: id
                });
            }
          }

          const ul = document.createElement('ul');
          ul.classList.add('tag-tree', 'animate__animated');
          ul.dataset.instanceId = `${id}`;
          ul.tabIndex = 0;
          ul.role = 'tree';
          ul.ariaLabel = 'タグ選択ツリー';

          const expansionButtonList: HTMLButtonElement[] = []
          const tagNameButtonList: HTMLButtonElement[] = []
          if ( treeItems.length !== 0 ) {
            treeItems.forEach(tag => {

              const li = document.createElement('li');
              li.role = 'treeitem';
              const buttonWrap = document.createElement('span');
              buttonWrap.classList.add('for-hover');
              const expansionButton = document.createElement('button');
              const tagNameButton = document.createElement('button');

              expansionButton.classList.add('expansion');
              expansionButton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
              expansionButton.dataset.opend = 'false';
              expansionButton.dataset.tagId = tag.id;
              expansionButton.dataset.loaded = 'false';

              tagNameButton.classList.add('tag-name')
              tagNameButton.textContent = tag.name;
              tagNameButton.dataset.tagId = tag.id;

              expansionButtonList.push(expansionButton);
              tagNameButtonList.push(tagNameButton);
              buttonWrap.append(expansionButton);
              buttonWrap.append(tagNameButton);
              li.append(buttonWrap);
              ul.append(li);
            });
          }else {
            const li = document.createElement('li');
            li.role = 'treeitem';
            const button = document.createElement('button');
            button.style.paddingLeft = '15px';
            button.dataset.tagId = 'none';
            button.textContent = '登録無し';

            expansionButtonList.push( button );
            li.append( button );
            ul.append( li );
          }

          if (target === null) {

            if (CleePIX.currentInstanceId !== id) {
              ul.classList.add('animate__fadeOutRight');
              ul.inert = true;
            } else ul.classList.add('animate__fadeInLeft');

            setTagEvent({ expansionButtonList, tagNameButtonList }, true);

            CleePIX.liveDom.tagTreePanel[id] = ul;
            CleePIX.liveDom.instancePanel
              .querySelector<HTMLDivElement>('div.tag-select-panel')!
              .insertAdjacentElement('beforeend', ul);
          } else {
            ul.hidden = true;
            ul.classList.add('sub', 'animate__fadeInLeft');
            target.insertAdjacentElement('beforeend', ul);
            setTagEvent({ expansionButtonList, tagNameButtonList });
          }

          resolve({ expansionButtonList, tagNameButtonList });
        });
      }

      CleePIX.instanceDBs.forEach(db => {
        getTagTree(null, db.id).then(res => {
          res.expansionButtonList!.forEach(button => {
            getTagTree(<HTMLLIElement>(button.parentNode?.parentNode), Number(button.dataset.tagId));
          });
        });
      });

      window.addEventListener('ite_change', (e) => {
        CleePIX.liveDom.tagTreePanel[e.detail.id].classList.replace('animate__fadeInLeft', 'animate__fadeOutRight');
        CleePIX.liveDom.tagTreePanel[e.detail.id].inert = true;
        CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId].classList.replace('animate__fadeOutRight', 'animate__fadeInLeft');
        CleePIX.liveDom.tagTreePanel[CleePIX.currentInstanceId].inert = false;
      }, false);

      const resizePanelBar = CleePIX.liveDom.instancePanel
        .querySelector<HTMLSpanElement>('span.resize-panel-bar')!
      const tagSelectPanel = CleePIX.liveDom.instancePanel
        .querySelector<HTMLDivElement>('div.tag-select-panel')!
      const panelResizing = (e: MouseEvent): void => {
        tagSelectPanel.style.flexBasis = `${e.x}px`;
      }
      resizePanelBar.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', panelResizing, false);
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', panelResizing, false);
        }, false);
      });
    }
  }
}

window.addEventListener('DOMContentLoaded', () => { CleePIX.init() });