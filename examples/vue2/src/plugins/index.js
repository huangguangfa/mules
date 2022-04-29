import * as componentsList from "./gf-ui";
import Vue from "vue"
import { getComponents } from "../../../../packages/sten-components/dist/index";
export function injectComponents() {
    for (const cName in componentsList) {
        const elements = componentsList[cName];
        const elementsName = cName
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase()
            .substring(1);
        customElements.define(elementsName, elements);
    }
    Vue.prototype.$getComponents = getComponents;
}
