export function URItoBlob(dataURI: string): Blob {
  const byteString = atob(dataURI.split(',')[1]); // byte列に変換する
  const mimeType = dataURI.match(/:([a-z\/\-]+);/)![1];

  // byte列をBlobに変換する
  let buffer = new Uint8Array(byteString.length);
  for ( let i = 0; i < byteString.length; i++ ) {
	  buffer[i] = byteString.charCodeAt(i);
  }
  return new Blob( [buffer], { type: mimeType });
}

export function getStrDatetime( dateOffset: number = 0 ) {

  let date = new Date();
  if ( dateOffset > 0 ) date.setDate( date.getDate() - dateOffset );

  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  const h = ('0' + date.getHours()).slice(-2);
  const mi = ('0' + date.getMinutes()).slice(-2);
  const s = ('0' + date.getSeconds()).slice(-2);

  return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s;
}

export function textareaResizer( textarea: HTMLTextAreaElement ): void {
  textarea.style.height = '0';
  textarea.style.height = (textarea.scrollHeight + 10) + "px";
}