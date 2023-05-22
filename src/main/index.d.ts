export type windowInitValues = {
  width: number, height: number, minWidth: number, minHeight: number,
  x: number | null, y: number | null, isMaximize: boolean
}

export type storeConfig = {
  window: {
    main: windowInitValues, feedreader: windowInitValues,
    clipboard: windowInitValues & { isFixation: boolean }
  },
  instance?: { label: string, id: number, path: string }[],
  cache?: {
    currentInstanceId: number,
    tagTreeDomStrings: { [key: number]: string } | null,
    selectedTags: { [key: number]: number } | null
  }
}
