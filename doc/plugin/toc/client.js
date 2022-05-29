import Aside from "./components/aside.vue";

import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app }) {
    console.log("Aside", Aside);
    app.component("Aside", Aside);
  },
  setup() {

  },
  rootComponents: []
})
