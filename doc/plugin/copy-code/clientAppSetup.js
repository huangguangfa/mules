import { createApp, onUpdated, onMounted, watch } from "vue";
import { usePageData } from "@vuepress/client";
import CodeCopy from "./components/CodeCopy.vue";
import { defineClientAppSetup } from "@vuepress/client";
import "./theme/style.css";

export default defineClientAppSetup(() => {
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

  onMounted(() => {
    update();
  });

  onUpdated(() => {
    update();
  });

  watch(() => page.value.path, update);

  return update;
});
