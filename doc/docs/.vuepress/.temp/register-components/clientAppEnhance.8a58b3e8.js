import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("gfIcons", defineAsyncComponent(() => import("../_components/gf-Icons/index.vue")))
}
