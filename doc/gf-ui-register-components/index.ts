import * as componentsList from "./register-components";
import "../../packages/sten-themes/npm/index.css";
export function injectComponents() {

    for (const cName in componentsList) {
        const elements = componentsList[cName as keyof typeof componentsList];
        const elementsName = cName
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase()
            .substring(1);
        customElements.define(elementsName, elements);
    }
}
