import { defineClientConfig } from '@vuepress/client'
// import { createApp, watch } from "vue";
import { usePageData, useRouteLocale } from "@vuepress/client";
import { useRouter } from "vue-router";

export default defineClientConfig({
    enhance({ app, router, siteData }) {

    },
    setup() {
        const router = useRouter();
        const routeLocale = useRouteLocale();
        console.log('router', router)
        console.log('router', routeLocale.value)
    },
    rootComponents: []
});


