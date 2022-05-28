import { defineClientConfig } from "@vuepress/client";
import { defineComponent, h } from "vue";
import CommentProvider from "@CommentProvider";


export default defineClientConfig({
  enhance: ({ app }) => {
    const CommentService = defineComponent({
      name: "CommentService",

      props: {
        darkmode: {
          type: Boolean,
          default: false,
        },
      },

      setup(props) {
        return () =>
          h(CommentProvider, {
            darkmode: props.darkmode,
            // style: { display: enabled.value ? "block" : "none" },
          });
      },
    });

    app.component("CommentService", CommentService);
  },
});
