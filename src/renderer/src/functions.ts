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