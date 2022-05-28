import { defineClientConfig } from '@vuepress/client'
import { createApp, watch } from "vue";
import { usePageData } from "@vuepress/client";
import CodeCopy from "./components/CodeCopy.vue";
import "./theme/style.css";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const page = usePageData();

    const update = () => {
      setTimeout(() => {
        document
          .querySelectorAll(snippetorsCodeCopyOptions.selector)
          .forEach((el) => {
            if (el.classList.contains("code-copy-added")) return;
            let options = {
              align: snippetorsCodeCopyOptions.align,
              color: snippetorsCodeCopyOptions.color,
              backgroundTransition:
                snippetorsCodeCopyOptions.backgroundTransition,
              backgroundColor: snippetorsCodeCopyOptions.backgroundColor,
              successText: snippetorsCodeCopyOptions.successText,
              successTextColor: snippetorsCodeCopyOptions.successTextColor,
              staticIcon: snippetorsCodeCopyOptions.staticIcon,
            };
            let instance = createApp(CodeCopy, {
              parent: el,
              code: el.querySelector("pre").innerText,
              options: options,
            });
            let childEl = document.createElement("div");
            el.appendChild(childEl);
            instance.mount(childEl);

            el.classList.add("code-copy-added");
          });
      }, 500);
    };
    watch(() => page.value.path, update);

    return update;
  },
  setup() {

  },
  rootComponents: []
});


