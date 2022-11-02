import { computed, defineComponent, h, onMounted, ref } from "vue";
import { isDark } from "../../../composables/dark";
import { useLang } from "../../../composables/lang";
import { useRoute } from "vitepress";

export default defineComponent({
  name: "GiscusComment",
  setup() {
    const route = useRoute();
    const loaded = ref(false);
    const lang = useLang();
    const config = computed(() => ({
      id: "comments",
      repo: "huanggungfa/doc-comment",
      repoId: "R_kgDOHZreBQ",
      category: "General",
      term: route.path,
      categoryId: "DIC_kwDOHZreBc4CPTz5",
      lang: lang.value === "zh-CN" ? lang.value : "en",
      inputPosition: "top",
      reactionsEnabled: "1",
      theme: isDark.value ? "dark" : "light",
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
          class: ["giscus-wrapper", { "input-top": true }],
        },
        loaded.value ? h("giscus-widget", config.value) : []
      );
  },
});
