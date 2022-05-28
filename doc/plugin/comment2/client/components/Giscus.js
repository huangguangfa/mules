import { withBase } from "@vuepress/client";
import { computed, defineComponent, h, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { giscusOption } from "../define";


const SUPPORTED_LANGUAGES = [
  "de",
  "gsw",
  "en",
  "es",
  "fr",
  "id",
  "it",
  "ja",
  "ko",
  "pl",
  "ro",
  "ru",
  "vi",
  "zh-CN",
  "zh-TW",
];

export default defineComponent({
  name: "GiscusComment",

  props: {
    darkmode: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const route = useRoute();
    const loaded = ref(false);
    const config = computed(() => ({
      repo: giscusOption.repo,
      repoId: giscusOption.repoId,
      category: giscusOption.category,
      categoryId: giscusOption.categoryId,
      lang: 'zh-CN',
      theme: props.darkmode ? "dark" : "light",
      mapping: (giscusOption.mapping || "specific"),
      term: withBase(route.path),
      inputPosition: giscusOption.inputPosition || "top",
      reactionsEnabled: giscusOption.reactionsEnabled !== false ? "1" : "0",
      emitMetadata: "0",
    }));

    onMounted(() => {
      void import("giscus").then(() => {
        loaded.value = true;
      });
    });

    return () =>
      h(
        "div",
        {
          class: [
            "giscus-wrapper",
            { "input-top": giscusOption.inputPosition !== "bottom" },
          ],
          // style: {
          //   display: enableComment.value ? "block" : "none",
          // },
        },
        loaded.value ? h("giscus-widget", config.value) : []
      );
  },
});
