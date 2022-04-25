import { createApp } from "vue";
import App from "./App.vue";

import { injectComponents } from "./plugins";
injectComponents();
import "../../../packages/sten-themes/npm/index.css";

const app = createApp(App);

app.mount("#app");
