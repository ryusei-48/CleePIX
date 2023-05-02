export const includeDom: {

  initDivDom: (inert?: boolean) => HTMLDivElement,
  base: () => HTMLDivElement,
  instancePanel: () => HTMLDivElement,
  addAppSetings: () => HTMLDivElement,
  addInstance: () => HTMLDivElement,
  addTagBlock: ( inputId?: string | null ) => HTMLDivElement,
  addBookmarkSeelector: () => HTMLDivElement,
  addRssFeedSeelector: () => HTMLDivElement,
  addTextSelector: () => HTMLDivElement,
  contentsPanel: {
    base: () => HTMLDivElement, bookmarkItem: () => HTMLDivElement
  }

} = {

  initDivDom: function (inert = true) {

    const dom = document.createElement('div');
    if (inert === true) dom.inert = true;
    return dom;
  },

  base: function () {

    const dom = this.initDivDom(false);
    dom.innerHTML = `
      <header class="animate__animated animate__fadeIn">
        <div class="app-name">
          <h1>cleepix</h1>
        </div>
        <div class="app-setings"><button id="app-setings" aria-label="設定"><i class="fa-solid fa-gear"></i> 設定</button></div>
        <div id="minimize-win"><button aria-label="最小化"><i class="fa-solid fa-window-minimize"></i></button></div>
        <div id="maximize-win"><button aria-label="最大化"><i class="fa-regular fa-window-maximize"></i></button></div>
        <div id="close-win"><button aria-label="閉じる"><i class="fa-solid fa-xmark"></i></button></div>
      </header>
      <main id="insert-panel" class="animate__animated animate__fadeIn"></main>
      <div class="tmp-doms">
        <div hidden id="show-tag-context-menu-wrap"></div>
        <div hidden id="show-tag-context-menu"></div>
        <div inert id="show-loading-efect">
          <div class="spinner">
            <div></div> <div></div><div></div><div></div>    
          </div>
        </div>
      </div>
      `;
    return dom;
  },

  instancePanel: function () {

    const dom = this.initDivDom(false);
    dom.classList.add('instance-panel');
    dom.innerHTML = `
      <div class="operation-etc-panel">
        <div class="left-btns">
          <div class="large-btn">
            <button id="add-new-tag" title="新規タグ追加" aria-label="新規タグ追加"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div class="btn-list">
            <button id="show-inscetance-modal-btn">+ インスタンス</button>
            <button id="show-bookmark-modal-btn">+ ブックマーク</button>
            <button id="show-rss-feed-modal-btn">+ RSS フィード</button>
            <button id="show-text-modal-btn">+ 定型文</button>
          </div>
        </div>
        <div class="search-box">
          <input type="search" placeholder="検索キーワード" id="search-text">
          <button id="send-search-query" aria-label="検索"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="filter-parts">
          <button id="change-bookmark-btn" title="ブックマークフィルター" aria-label="フィルター、ブックマーク"><i class="fa-solid fa-bookmark"></i></button>
          <button id="change-rss-btn" title="RSSフィードフィルター" aria-label="フィルター、RSSフィード"><i class="fa-solid fa-rss"></i></button>
          <button id="change-text-btn" title="定型文フィルター" aria-label="フィルター、定型文"><i class="fa-solid fa-file"></i></button>
          <button id="change-design" title="デザイン切り替え" aria-label="デザイン切り替え"><i class="fa-solid fa-table-cells-large"></i></button>
        </div>
      </div>
      <div class="tag-and-content-wrap">
        <div class="tag-select-panel"></div>
        <span draggable="true" class="resize-panel-bar"></span>
        <div class="contents-panel">
          <!--<iframe style="width:100%;aspect-ratio:16 / 9;" src="https://etc.private.x-sv.com" title="爽快感・透明感が半端ない中毒性MAXのボカロ曲メドレー【全20曲】" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
          <!--<iframe style="width:100%;aspect-ratio:16 / 9;" src="https://www.youtube.com/embed/py7U28qEbPU" title="夢花火 / 百鬼あやめ original" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
          <!--<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">First Starlink v2 satellites reach orbit <a href="https://t.co/0l08568mJ9">pic.twitter.com/0l08568mJ9</a></p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1630394434847227909?ref_src=twsrc%5Etfw">February 28, 2023</a></blockquote>-->
          <!--<webview id="foo" src="https://etc.private.x-sv.com" style="width:100%;aspect-ratio:16 / 9;"></webview>-->
          <!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
        </div>
      </div>
    `;
    return dom;
  },

  addAppSetings: function () {

    const dom = this.initDivDom();
    dom.id = 'show-app-setings';
    dom.innerHTML = `
      <div class="app-setings-modal-wrap"></div>
      <div class="app-setings-modal">
        <div aria-label="アプリの設定" class="app-seting-element" tabindex="0">
          <button class="modal-close" aria-label="閉じる"><i class="fa-solid fa-xmark"></i></button>
          <h2>データのインポートとエクスポート</h2>
          <fieldset class="forms">
            <legend>データのインポートとエクスポート</legend>
            <div class="label"><label for="add-bookmark-thumb">ブックマークのインポート</label></div>
            <div class="form">
              <label role="button" class="add-custom-thumb" for="import-bookmark">ファイル選択</label>
              <input type="file" id="import-bookmark"><br/>
              <span>※各ブラウザーからHTML形式のエクスポートファイルを読み込みます。</span>
            </div>
          </fieldset>
          <span id="test-img"></span>
        </div>
        <!--<webview id="webview" src="https://www.google.com/" style="display:inline-flex; width:100%; height:100%"></webview>-->
        <iframe style="width:700px;aspect-ratio:16 / 9;" src="https://www.youtube.com/embed/py7U28qEbPU" title="夢花火 / 百鬼あやめ original" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
  `;
  return dom;
  },

  addInstance: function () {

    const dom = this.initDivDom();
    dom.id = 'show-inscetance';
    dom.innerHTML = `
      <div class="instance-select-element-wrap"></div>
      <div class="instance-select-element">
        <div class="instance-names" tabindex="0" aria-label="インスタンスラベルフィールド">
          <span class="label-group"></span>
          <button aria-label="インスタンス追加" title="インスタンス追加" id="add-instance-btn">＋</button>
        </div>
      </div>
    `;
    return dom;
  },

  addTagBlock: function ( inputId = null ) {

    const dom = this.initDivDom(false);
    dom.classList.add('tags_blocks_wrap');
    dom.innerHTML = `
      <span class="selected-label"></span>
      <span class="tag_input_wrap">
        <input class="tag_input" placeholder="追加するタグを入力" type="text">
        <span inert class="tag_suggest"></span>
      </span>
    `;

    if ( inputId !== null ) {
      dom.querySelector<HTMLInputElement>('input.tag_input')!.id = inputId;
    }
    return dom;
  },

  addBookmarkSeelector: function () {

    const dom = this.initDivDom();
    dom.id = 'show-add-bookmark-modal';
    dom.innerHTML = `
      <div class="add-bookmark-modal-wrap"></div>
      <div class="add-bookmark-modal">
        <div class="add-bookmark-element">
          <h2>ブックマークを追加</h2>
          <fieldset class="forms">
            <legend>ブックマークを追加するための入力フィールド</legend>
            <div class="label"><label for="add-bookmark-url">URL</label></div>
            <div class="form"><input type="url" id="add-bookmark-url"></div>
            <div class="label"><label for="add-bookmark-title">タイトル</label></div>
            <div class="form"><input type="text" id="add-bookmark-title"></div>
            <div class="label"><label for="add-bookmark-thumb">サムネイル</label></div>
            <div class="form">
              <label role="button" class="add-custom-thumb" for="add-bookmark-thumb">カスタムサムネイルを設定</label>
              <input type="file" id="add-bookmark-thumb">
              <span>※ご自身でサムネイル画像を設定したい場合</span>
            </div>
            <div class="label"><label>説明</label></div>
            <div class="form description">
              <div class="description-input">
                <textarea id="add-bookmark-description" placeholder="ページの説明を入力"></textarea>
              </div>
              <div class="view-thumb">
                <span class="no-thumb">No thumbnail</span>
              </div>
            </div>
            <div class="label"><label for="add-bookmark-tags">タグ</label></div>
            <div class="form tags"></div>
            <button class="send-btn" id="add-bookmark-btn">追加</button>
          </fieldset>
          <button class="modal-close" aria-label="閉じる"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    `;
    return dom;
  },

  addRssFeedSeelector: function () {

    const dom = this.initDivDom();
    dom.id = 'show-add-rss-feed-modal';
    dom.innerHTML = `
      <div class="add-rss-feed-modal-wrap"></div>
      <div class="add-rss-feed-modal">
        <div class="add-rss-feed-element">
          <h2>RSSフィードを追加</h2>
          <fieldset class="forms">
            <legend>RSSフィードを追加するための入力フィールド</legend>
            <div class="label"><label for="add-rss-feed-title">サイトタイトル</label></div>
            <div class="form"><input type="text" id="add-rss-feed-title"></div>
            <div class="label"><label for="add-rss-feed-url">フィードURL</label></div>
            <div class="form"><input type="url" id="add-rss-feed-url"></div>
            <div class="label"><label for="add-rss-feed-thumb">サイトアイコン</label></div>
            <div class="form"><input type="file" id="add-rss-feed-thumb"></div>
            <div class="label"><label for="add-rss-tags">タグ</label></div>
            <div class="form tags"></div>
            <button class="send-btn" id="add-rss-feed-btn">追加</button>
          </fieldset>
          <button class="modal-close" aria-label="閉じる"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    `;

    return dom;
  },

  addTextSelector: function () {

    const dom = this.initDivDom();
    dom.id = 'show-add-text-modal';
    dom.innerHTML = `
      <div class="add-text-modal-wrap"></div>
      <div class="add-text-modal">
        <div class="add-text-element">
          <h2>定型文・メモを追加</h2>
          <fieldset class="forms">
            <legend>定型文を追加するための入力フィールド</legend>
            <div class="label"><label for="add-text-title">タイトル</label></div>
            <div class="form"><input type="text" id="add-text-title"></div>
            <div id="show-add-text-field"></div>
            <button class="send-btn" id="add-text-btn">追加</button>
          </fieldset>
          <button class="modal-close" aria-label="閉じる"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    `;

    return dom;
  },

  contentsPanel: {

    base: function () {

      const dom = includeDom.initDivDom( false );
      dom.classList.add('content-elements-wrap');
      dom.innerHTML = `<div id="insert-ce" class="content-elements"></div>`;
      return dom;
    },

    bookmarkItem: function () {

      const dom = includeDom.initDivDom( false );
      dom.classList.add('bookmark-item', 'animate__animated', 'animate__fadeIn');
      dom.innerHTML = `
        <div class="content"></div>
      `;
      return dom;
    }
  }
}