export function isDef(val) {
  return val !== undefined && val !== null;
}
export function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}

export function injectComponents(componentsList) {
  for (const cName in componentsList) {
    const elements = componentsList[cName];
    const elementsName = cName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .substring(1);
    console.log(elementsName);
    customElements.define(elementsName, elements);
  }
}
