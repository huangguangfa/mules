import { defineClientConfig } from '@vuepress/client'

import Toc from "./components/Toc.vue";

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component("Toc", Toc);
    },
    setup() {

    },
    rootComponents: []
});


