import Aside from "./components/aside.vue";

import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Aside", Aside);
  },
  setup() {

  },
  rootComponents: []
})
