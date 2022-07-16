import { defineClientConfig } from "@vuepress/client";
import { debounce } from "../../utils/index";

const scriptId = "sten-com";

function injectScript() {
  let script = document.createElement("script");
  script.src = "/doc/build/sten-components.esm.js";
  script.type = "module";
  script.id = scriptId;
  document.body.appendChild(script);
}

function removeScript() {
  const script = document.querySelectorAll(`#${scriptId}`);
  if (script.length === 0) return;
  Array.from(script).forEach((element) => {
    document.body.removeChild(element);
  });
}

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach(
      debounce(function (to) {
        // removeScript();
        // setTimeout(() => {
        //   console.log("注入");
        //   injectScript();
        // }, 1000);
      }, 500)
    );
    app.mixin({
      created() {},
      mounted() {
        console.log(11, router);
      },
    });
  },
  setup() {},
  rootComponents: [],
});
