// import * as componentsList from "./register-components";
import "./register-components";
import "../../packages/sten-themes/npm/index.css";
export function injectComponents() {
    console.log('加载外部组件');
    // for (const cName in componentsList) {
    //     const elements = componentsList[cName as keyof typeof componentsList];
    //     const elementsName = cName
    //         .replace(/([A-Z])/g, "-$1")
    //         .toLowerCase()
    //         .substring(1);
    //     customElements.define(elementsName, elements);
    // }
}
