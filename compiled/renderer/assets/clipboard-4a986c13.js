import{c as P}from"./include.dom-6053ed93.js";function S(i){const c=atob(i.split(",")[1]),w=i.match(/:([a-z\/\-]+);/)[1];let m=new Uint8Array(c.length);for(let s=0;s<c.length;s++)m[s]=c.charCodeAt(s);return new Blob([m],{type:w})}function k(i){i.style.height="0",i.style.height=i.scrollHeight+10+"px"}const T={liveDom:{base:P.base(),contentPanel:P.contentPanel(),__contentPanel:{__history:{},__search:{},__tmp:{}},__previewPanel:{}},init:async function(){this.config=await window.electron.ipcRenderer.invoke("get-config"),this.windowControl(),this.contentPanel()},windowControl:function(){this.liveDom.base.querySelector("div#close-win > button")?.addEventListener("click",()=>{window.electron.ipcRenderer.send("window-hide","clipboard")}),this.liveDom.base.querySelector("div#maximize-win button")?.addEventListener("click",()=>{window.electron.ipcRenderer.send("window-maximize","clipboard")}),this.liveDom.base.querySelector("div#minimize-win button")?.addEventListener("click",()=>{window.electron.ipcRenderer.send("window-minize","clipboard")});const i=this.liveDom.base.querySelector("div#fixation-win button");this.config?.window?.clipboard.isFixation&&(i.classList.add("active"),i.title="ウィンドウの固定を解除",i.ariaLabel="ウィンドウの固定を解除"),i.addEventListener("click",()=>{window.electron.ipcRenderer.invoke("clipboard-win-show-top").then(c=>{c?(i.classList.add("active"),i.title="ウィンドウの固定を解除",i.ariaLabel="ウィンドウの固定を解除"):(i.classList.remove("active"),i.title="ウィンドウを最前面に固定",i.ariaLabel="ウィンドウを最前面に固定")})}),document.getElementById("app")?.append(this.liveDom.base)},contentPanel:async function(){this.liveDom.__contentPanel.history=this.liveDom.contentPanel.querySelector("div.content.history"),this.liveDom.__contentPanel.__history.recordList=this.liveDom.__contentPanel.history.querySelector("ul.record-list"),this.liveDom.__contentPanel.search=this.liveDom.contentPanel.querySelector("div.content.search"),this.liveDom.__contentPanel.__search.recordList=this.liveDom.__contentPanel.search.querySelector("ul.record-list"),this.liveDom.__contentPanel.tmp=this.liveDom.contentPanel.querySelector("div.content.tmp"),this.liveDom.__contentPanel.__tmp.recordList=this.liveDom.__contentPanel.tmp.querySelector("ul.record-list"),this.liveDom.previewPanel=this.liveDom.contentPanel.querySelector("div.preview-panel"),this.liveDom.__previewPanel.clipText=this.liveDom.contentPanel.querySelector("#preview-clip-text"),this.liveDom.__previewPanel.clipHtml=this.liveDom.contentPanel.querySelector("#preview-clip-html"),this.liveDom.__previewPanel.clipImage=this.liveDom.contentPanel.querySelector("#preview-clip-image");let i={};const c=this.liveDom.__contentPanel.__history.recordList.querySelector("li.no-data-record"),w=this.liveDom.__contentPanel.__search.recordList.querySelector("li.no-data-record"),m=this.liveDom.__contentPanel.__tmp.recordList.querySelector("li.no-data-record"),s=()=>{Object.entries(this.liveDom.__previewPanel).forEach(e=>{e[1].parentElement.classList.add("hide"),e[1].parentElement.inert=!0})};[...this.liveDom.contentPanel.querySelectorAll("div.tab-labels input.tab")].forEach(e=>{e.addEventListener("click",()=>{const t=this.liveDom.contentPanel.querySelector("div.tab-content div.content.show");t.classList.remove("show"),t.inert=!0;const o=this.liveDom.contentPanel.querySelector(`div.tab-content div.${e.value}`);o.classList.add("show"),o.inert=!1,e.value==="history"&&i.history?i.history.click():e.value==="search"&&i.search?i.search.click():e.value==="tmp"&&i.tmp?i.tmp.click():s()})});let y="";const _=(e,t,o)=>{const n=document.createElement("li"),r=document.createElement("span"),a=document.createElement("span"),p=document.createElement("button");if(n.tabIndex=0,n.classList.add("record","animate__animated","animate__fadeInLeft"),n.dataset.rowId=`${e}`,a.classList.add("operation"),p.classList.add("copy"),p.title="クリップボードに送る",p.ariaLabel="クリップボードに送る",p.innerHTML='<i class="fa-solid fa-copy"></i>',p.addEventListener("click",()=>{window.electron.ipcRenderer.invoke("update-clipboard-write-time").then(()=>{window.electron.ipcRenderer.send("clipboard-write",[t[0][0],t[0][1]])})}),n.addEventListener("contextmenu",l=>{window.electron.ipcRenderer.send("clip-hist-copy",{rowId:Number(l.currentTarget.dataset.rowId),clips:t,pos:{x:l.x,y:l.y},type:o})}),n.addEventListener("dblclick",l=>{this.liveDom.contentPanel.querySelector("#toggle-preview-panel").click(),l.currentTarget.click()}),n.addEventListener("click",l=>{o==="history"&&i.history?i.history.classList.remove("click"):o==="search"&&i.search?i.search.classList.remove("click"):o==="tmp"&&i.tmp&&i.tmp.classList.remove("click"),l.currentTarget.classList.add("click"),i[o]=l.currentTarget,s(),t.forEach(d=>{if(d[0]==="text/plain")this.liveDom.__previewPanel.clipText.value=d[1],(this.liveDom.__previewPanel.clipText?.parentElement).classList.remove("hide"),(this.liveDom.__previewPanel.clipText?.parentElement).inert=!1,k(this.liveDom.__previewPanel.clipText);else if(d[0]==="text/html")this.liveDom.__previewPanel.clipHtml.innerHTML=d[1],this.liveDom.__previewPanel.clipImage.dataset.htmlSource=d[1],(this.liveDom.__previewPanel.clipHtml?.parentElement).classList.remove("hide"),(this.liveDom.__previewPanel.clipHtml?.parentElement).inert=!1;else if(d[0].indexOf("image/")>=0){const f=document.createElement("img");f.alt="画像",f.src=d[1],this.liveDom.__previewPanel.clipImage.innerHTML="",this.liveDom.__previewPanel.clipImage.append(f),(this.liveDom.__previewPanel.clipImage?.parentElement).classList.remove("hide"),(this.liveDom.__previewPanel.clipImage?.parentElement).inert=!1}})}),t[0][0]==="text/plain"&&typeof t[0][1]=="string")r.textContent=t[0][1],r.title=t[0][1],r.classList.add("view-text");else if(t[0][0]==="text/html"&&typeof t[0][1]=="string"){let l=!1;t.forEach(d=>{d[0].indexOf("image/")&&(l=!0)}),l?(r.innerHTML=t[0][1],r.title="画像",r.classList.add("view-img")):(r.textContent=t[0][1],r.title=t[0][1],r.classList.add("view-text"))}else if(t[0][0].indexOf("image/")>=0){const l=document.createElement("img");l.alt="画像",l.src=window.URL.createObjectURL(S(t[0][1])),r.appendChild(l),r.classList.add("view-img")}switch(n.appendChild(r),a.appendChild(p),n.appendChild(a),o){case"history":this.liveDom.__contentPanel.__history.recordList?.insertAdjacentElement("afterbegin",n);break;case"search":this.liveDom.__contentPanel.__search.recordList?.insertAdjacentElement("afterbegin",n);break;case"tmp":this.liveDom.__contentPanel.__tmp.recordList?.insertAdjacentElement("afterbegin",n)}},L=(e,t)=>{e.forEach(o=>{const n=[];for(let[r,a]of Object.entries(o))r==="text"&&typeof a=="string"?n.push(["text/plain",a]):r==="html"&&typeof a=="string"?n.push(["text/html",a]):r==="rtf"&&typeof a=="string"?n.push(["text/rtf",a]):r==="image"&&typeof a=="string"&&n.push(["image/png",a]);_(o.id,n,t)})};window.electron.ipcRenderer.invoke("get-clipboard",{type:"history",offset:0}).then(e=>{e.length>0&&(c.classList.add("hide"),L(e,"history"))}),window.electron.ipcRenderer.invoke("get-clipboard",{type:"tmp",offset:0}).then(e=>{e.length>0&&(m.classList.add("hide"),L(e,"tmp"))});const b=async()=>{const e=await window.electron.ipcRenderer.invoke("clipboard-read");if(e.length===0)return;if(y===e[0][1])return;if(e.length===1&&e[0][0]==="text/rtf")return;y=e[0][1];const t=await window.electron.ipcRenderer.invoke("clipboard-insert-db",e);t&&_(t,e,"history")};window.electron.ipcRenderer.on("clipboard-change",()=>{this.liveDom.__contentPanel.__history.recordList?.childElementCount===1&&c.classList.add("hide"),b()}),window.electron.ipcRenderer.on("update-clipboard-saved",(e,t)=>{this.liveDom.__contentPanel.__tmp.recordList?.childElementCount===1&&m.classList.add("hide"),_(t.insertId,t.clips,"tmp")}),this.liveDom.contentPanel.querySelector("#clip-history-all-del-btn").addEventListener("click",async()=>{await window.electron.ipcRenderer.invoke("clipboard-history-all-delete")&&this.liveDom.__contentPanel.__history.recordList?.querySelectorAll("li.record").forEach(t=>{t.classList.replace("animate__fadeInLeft","animate__fadeOutUp"),setTimeout(()=>{t.remove()},500),i.history=void 0,c.classList.remove("hide"),s()})}),this.liveDom.contentPanel.querySelector("#clip-saved-all-del-btn").addEventListener("click",async()=>{await window.electron.ipcRenderer.invoke("clipboard-saved-all-delete")&&this.liveDom.__contentPanel.__tmp.recordList?.querySelectorAll("li.record").forEach(t=>{t.classList.replace("animate__fadeInLeft","animate__fadeOutUp"),setTimeout(()=>{t.remove()},500),i.tmp=void 0,m.classList.remove("hide"),s()})}),this.liveDom.previewPanel.querySelector("#preview-clip-text-copy").addEventListener("click",async()=>{await window.electron.ipcRenderer.invoke("update-clipboard-write-time"),window.electron.ipcRenderer.send("clipboard-write",["text/plain",this.liveDom.__previewPanel.clipText?.value,!1])}),this.liveDom.previewPanel.querySelector("#preview-clip-html-copy").addEventListener("click",async()=>{await window.electron.ipcRenderer.invoke("update-clipboard-write-time"),window.electron.ipcRenderer.send("clipboard-write",["text/html",this.liveDom.__previewPanel.clipHtml?.innerHTML])}),this.liveDom.previewPanel.querySelector("#preview-clip-image-copy").addEventListener("click",async()=>{await window.electron.ipcRenderer.invoke("update-clipboard-write-time");const e=this.liveDom.__previewPanel.clipImage.childNodes[0].src;window.electron.ipcRenderer.send("clipboard-write",["image/png",e])}),window.electron.ipcRenderer.on("deleted-record",(e,t)=>{if(t.type==="history")[this.liveDom.__contentPanel.__history.recordList,this.liveDom.__contentPanel.__tmp.recordList].forEach((o,n)=>{const r=o.querySelector(`li.record[data-row-id='${t.rowId}']`);r&&(r.classList.replace("animate__fadeInLeft","animate__fadeOutUp"),n===0&&Number(i.history?.dataset.rowId)===t.rowId?(i.history=void 0,s()):n===1&&Number(i.search?.dataset.rowId)===t.rowId&&(i.search=void 0,s()),setTimeout(()=>{r.remove(),o.childElementCount===1&&n===0?c.classList.remove("hide"):o.childElementCount===1&&n===1&&w.classList.remove("hide")},500))});else if(t.type==="tmp"){const o=this.liveDom.__contentPanel.__tmp.recordList.querySelector(`li.record[data-row-id='${t.rowId}']`);o?.classList.replace("animate__fadeInLeft","animate__fadeOutUp"),i.tmp?.dataset.rowId===o?.dataset.rowId&&(i.tmp=void 0,s()),setTimeout(()=>{o?.remove(),this.liveDom.__contentPanel.__tmp.recordList?.childElementCount===1&&m.classList.remove("hide")},500)}});const E=this.liveDom.__contentPanel.search.querySelector("#history-search-text"),v=this.liveDom.__contentPanel.search.querySelector("div.select-time-limit");this.liveDom.__contentPanel.search.querySelector("#history-search-institution").addEventListener("change",e=>{e.currentTarget.value==="time-limit"?(v.classList.add("show"),v.inert=!1):v.classList.contains("show")&&(v.classList.remove("show"),v.inert=!0)}),E.addEventListener("keyup",e=>{!e.isComposing&&e.currentTarget.value!==""&&window.electron.ipcRenderer.invoke("clip-history-search",{string:e.currentTarget.value,startDate:"2023-06-05 00:00",endDate:"2023-06-05 23:59",sort:"ASC",offset:0}).then(t=>{console.log(t)})});const u=this.liveDom.contentPanel.querySelector("span.resize-bar"),h=this.liveDom.contentPanel.querySelector("div.tab-content > div.content-wrap"),D=this.liveDom.contentPanel.querySelector("div.tab-content > div.preview-panel");this.liveDom.contentPanel.querySelector("#toggle-preview-panel").addEventListener("click",e=>{e.stopPropagation(),e.currentTarget.dataset.isShow==="false"?(e.currentTarget.innerHTML='<i class="fa-solid fa-angles-left"></i>',e.currentTarget.title="プレビューパネルを閉じる",e.currentTarget.ariaLabel="プレビューパネルを閉じる",e.currentTarget.dataset.isShow="true",h.classList.add("resize"),u.classList.add("show"),D.classList.add("show"),window.electron.ipcRenderer.send("resize-aspect16/9-win",!0)):(e.currentTarget.innerHTML='<i class="fa-solid fa-arrow-right-to-bracket"></i>',e.currentTarget.title="保存されたクリップボードのプレビューを表示",e.currentTarget.ariaLabel="保存されたクリップボードのプレビューを表示",e.currentTarget.dataset.isShow="false",h.classList.remove("resize"),h.style.removeProperty("flex-basis"),u.classList.remove("show"),D.classList.remove("show"),window.electron.ipcRenderer.send("resize-aspect16/9-win",!1))});const g=e=>{h.style.flexBasis=`${e.x}px`};u.addEventListener("mousedown",()=>{document.addEventListener("mousemove",g,!1),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",g,!1)},!1)}),this.liveDom.base.querySelector("main#insert-panel").insertAdjacentElement("beforeend",this.liveDom.contentPanel)}};document.addEventListener("DOMContentLoaded",()=>{T.init()});
