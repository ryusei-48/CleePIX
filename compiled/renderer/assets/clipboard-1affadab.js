import{c as f}from"./include.dom-d93864bf.js";function L(t){const o=atob(t.split(",")[1]),d=t.match(/:([a-z\/\-]+);/)[1];let p=new Uint8Array(o.length);for(let s=0;s<o.length;s++)p[s]=o.charCodeAt(s);return new Blob([p],{type:d})}function b(t){t.style.height="0",t.style.height=t.scrollHeight+10+"px"}const g={liveDom:{base:f.base(),contentPanel:f.contentPanel(),__contentPanel:{__history:{}},__previewPanel:{}},init:async function(){this.config=await window.electron.ipcRenderer.invoke("get-config"),this.windowControl(),this.contentPanel()},windowControl:function(){this.liveDom.base.querySelector("div#close-win > button")?.addEventListener("click",()=>{window.electron.ipcRenderer.send("window-hide","clipboard")}),this.liveDom.base.querySelector("div#maximize-win button")?.addEventListener("click",()=>{window.electron.ipcRenderer.send("window-maximize","clipboard")}),this.liveDom.base.querySelector("div#minimize-win button")?.addEventListener("click",()=>{window.electron.ipcRenderer.send("window-minize","clipboard")});const t=this.liveDom.base.querySelector("div#fixation-win button");this.config?.window?.clipboard.isFixation&&(t.classList.add("active"),t.title="ウィンドウの固定を解除",t.ariaLabel="ウィンドウの固定を解除"),t.addEventListener("click",()=>{window.electron.ipcRenderer.invoke("clipboard-win-show-top").then(o=>{o?(t.classList.add("active"),t.title="ウィンドウの固定を解除",t.ariaLabel="ウィンドウの固定を解除"):(t.classList.remove("active"),t.title="ウィンドウを最前面に固定",t.ariaLabel="ウィンドウを最前面に固定")})}),document.getElementById("app")?.append(this.liveDom.base)},contentPanel:async function(){this.liveDom.__contentPanel.history=this.liveDom.contentPanel.querySelector("div.content.history"),this.liveDom.__contentPanel.__history.recordList=this.liveDom.__contentPanel.history.querySelector("ul.record-list"),this.liveDom.previewPanel=this.liveDom.contentPanel.querySelector("div.preview-panel"),this.liveDom.__previewPanel.clipText=this.liveDom.contentPanel.querySelector("#preview-clip-text"),this.liveDom.__previewPanel.clipHtml=this.liveDom.contentPanel.querySelector("#preview-clip-html"),this.liveDom.__previewPanel.clipImage=this.liveDom.contentPanel.querySelector("#preview-clip-image"),[...this.liveDom.contentPanel.querySelectorAll("div.tab-labels input.tab")].forEach(i=>{i.addEventListener("click",()=>{const e=this.liveDom.contentPanel.querySelector("div.tab-content div.content.show");e.classList.remove("show"),e.inert=!0;const a=this.liveDom.contentPanel.querySelector(`div.tab-content div.${i.value}`);a.classList.add("show"),a.inert=!1})});let t=!1,o=null,d="";const p=async()=>{new Promise(async i=>{if(t){t=!1;return}const e=await window.electron.ipcRenderer.invoke("clipboard-read");if(e.length===0){i();return}if(d===e[0][1]){i();return}else d=e[0][1];console.log(e);const a=document.createElement("li"),n=document.createElement("span"),m=document.createElement("span"),c=document.createElement("button");if(a.classList.add("record","animate__animated","animate__fadeInLeft"),m.classList.add("operation"),c.classList.add("copy"),c.title="クリップボードに送る",c.ariaLabel="クリップボードに送る",c.innerHTML='<i class="fa-solid fa-copy"></i>',c.addEventListener("click",()=>{window.electron.ipcRenderer.send("clipboard-write",[e[0][0],e[0][1]]),t=!0}),a.addEventListener("contextmenu",l=>{window.electron.ipcRenderer.send("clip-hist-copy",{clips:e,pos:{x:l.x,y:l.y}})}),a.addEventListener("click",l=>{o&&o.classList.remove("click"),l.currentTarget.classList.add("click"),o=l.currentTarget,Object.entries(this.liveDom.__previewPanel).forEach(r=>{r[1].parentElement.classList.add("hide")}),e.forEach(r=>{if(r[0]==="text/plain")this.liveDom.__previewPanel.clipText.value=r[1],(this.liveDom.__previewPanel.clipText?.parentElement).classList.remove("hide"),b(this.liveDom.__previewPanel.clipText);else if(r[0]==="text/html")this.liveDom.__previewPanel.clipHtml.innerHTML=r[1],this.liveDom.__previewPanel.clipImage.dataset.htmlSource=r[1],(this.liveDom.__previewPanel.clipHtml?.parentElement).classList.remove("hide");else if(r[0].indexOf("image/")>=0){const w=document.createElement("img");w.alt="画像",w.src=r[1],this.liveDom.__previewPanel.clipImage.innerHTML="",this.liveDom.__previewPanel.clipImage.append(w),(this.liveDom.__previewPanel.clipImage?.parentElement).classList.remove("hide")}})}),e[0][0]==="text/plain"&&typeof e[0][1]=="string")n.textContent=e[0][1],n.title=e[0][1],n.classList.add("view-text");else if(e[0][0]==="text/html"&&typeof e[0][1]=="string"){let l=!1;e.forEach(r=>{r[0].indexOf("image/")&&(l=!0)}),l?(n.innerHTML=e[0][1],n.title="画像",n.classList.add("view-img")):(n.textContent=e[0][1],n.title=e[0][1],n.classList.add("view-text"))}else if(e[0][0].indexOf("image/")>=0){const l=document.createElement("img");l.alt="画像",l.src=window.URL.createObjectURL(L(e[0][1])),n.appendChild(l),n.classList.add("view-img")}a.appendChild(n),m.appendChild(c),a.appendChild(m),this.liveDom.__contentPanel.__history.recordList?.insertAdjacentElement("afterbegin",a),i()})};window.electron.ipcRenderer.on("clipboard-change",()=>{p()}),this.liveDom.previewPanel.querySelector("#preview-clip-text-copy").addEventListener("click",()=>{window.electron.ipcRenderer.send("clipboard-write",["text/plain",this.liveDom.__previewPanel.clipText?.value,!1])}),this.liveDom.previewPanel.querySelector("#preview-clip-html-copy").addEventListener("click",()=>{window.electron.ipcRenderer.send("clipboard-write",["text/html",this.liveDom.__previewPanel.clipHtml?.innerHTML])}),this.liveDom.previewPanel.querySelector("#preview-clip-image-copy").addEventListener("click",()=>{const i=this.liveDom.__previewPanel.clipImage.childNodes[0].src;window.electron.ipcRenderer.send("clipboard-write",["image/png",i])});const s=this.liveDom.contentPanel.querySelector("span.resize-bar"),v=this.liveDom.contentPanel.querySelector("div.tab-content > div.content-wrap"),h=this.liveDom.contentPanel.querySelector("div.tab-content > div.preview-panel");this.liveDom.contentPanel.querySelector("#toggle-preview-panel").addEventListener("click",i=>{i.stopPropagation(),i.currentTarget.dataset.isShow==="false"?(i.currentTarget.innerHTML='<i class="fa-solid fa-angles-left"></i>',i.currentTarget.title="プレビューパネルを閉じる",i.currentTarget.ariaLabel="プレビューパネルを閉じる",i.currentTarget.dataset.isShow="true",v.classList.add("resize"),s.classList.add("show"),h.classList.add("show"),window.electron.ipcRenderer.send("resize-aspect16/9-win",!0)):(i.currentTarget.innerHTML='<i class="fa-solid fa-arrow-right-to-bracket"></i>',i.currentTarget.title="保存されたクリップボードのプレビューを表示",i.currentTarget.ariaLabel="保存されたクリップボードのプレビューを表示",i.currentTarget.dataset.isShow="false",v.classList.remove("resize"),v.style.removeProperty("flex-basis"),s.classList.remove("show"),h.classList.remove("show"),window.electron.ipcRenderer.send("resize-aspect16/9-win",!1))});const u=i=>{v.style.flexBasis=`${i.x}px`};s.addEventListener("mousedown",()=>{document.addEventListener("mousemove",u,!1),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",u,!1)},!1)}),this.liveDom.base.querySelector("main#insert-panel").insertAdjacentElement("beforeend",this.liveDom.contentPanel)}};document.addEventListener("DOMContentLoaded",()=>{g.init()});
