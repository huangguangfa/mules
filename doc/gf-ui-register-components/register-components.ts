// 加载所有的icon
// import "../../packages/sten-icons/www/build/sten-icons.esm.js";
// import "../../packages/sten-icons/src/global/index.css";

// 加载所有的组件
import "../../packages/sten-components/www/build/sten-components.esm.js";
// import "../../packages/sten-themes/npm/index.css";

// 引入单个
// export { GfButton } from "../../packages/sten-components/dist/components/gf-button";


import { applyPolyfills, defineCustomElements } from "@gf-ui/components/loader"

applyPolyfills().then(() => {
    defineCustomElements();
});

