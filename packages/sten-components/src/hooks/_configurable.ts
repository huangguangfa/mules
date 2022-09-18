export interface ConfigurableWindow {
  window?: Window
}

export interface ConfigurableDocument {
  document?: Document
}

export interface ConfigurableNavigator {
  navigator?: Navigator
}

export interface ConfigurableLocation {
  location?: Location
}

export const defaultWindow = /* #__PURE__ */ window
export const defaultDocument = /* #__PURE__ */ window.document
export const defaultNavigator = /* #__PURE__ */ window.navigator
export const defaultLocation = /* #__PURE__ */ window.location
