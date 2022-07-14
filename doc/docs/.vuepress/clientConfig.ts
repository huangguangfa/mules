import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to) => {
      // let page = document.getElementsByClassName("theme-default-content")[0];
      // setTimeout(() => {
      //   console.log("路由切换");
      //   page.style.display = "none";
      //   setTimeout(() => {
      //     page.style.display = "block";
      //   });
      // }, 200);
    });
    app.mixin({
      created() {
        // router.replace(router.currentRoute.value.path);
        // console.log(siteData);
      },
      mounted() {},
    });
  },
  setup() {
    // const script = document.createElement('script')
    // const cssLink = document.createElement('link')
    // cssLink.setAttribute('rel', 'stylesheet');
    // cssLink.setAttribute('href', 'https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.css');
    // script.src = '../sten-components/sten-components.esm.js'
    // script.type = 'module'
    // document.head.append(cssLink)
    // document.head.append(script)
  },
  rootComponents: [],
});
