import * as componentsList from "./gf-ui"


export function injectComponents() {
    console.log(componentsList)
    for (const cName in componentsList) {
        // const elements = componentsList[cName];
        console.log(cName[0].toLowerCase())

        // const elementsName = cName[0].toLowerCase().replace(/([A-Z])/g, "$1-").toLowerCase();
        // customElements.define(elementsName, elements);
    }

}


