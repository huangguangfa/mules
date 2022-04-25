import Vue from "vue";
import App from "./App.vue";

/* eslint-disable */
// import { applyPolyfills, defineCustomElements } from "@gf-ui/components/loader";
// applyPolyfills().then(() => {
//     defineCustomElements();
// });



import "../../../packages/sten-themes/npm/index.css"

// 过滤我们的测试组件、不让vue做组件解析
Vue.config.ignoredElements = [/gf-\w*/];


Vue.config.productionTip = false;


new Vue({
    render: (h) => h(App),
}).$mount("#app");
