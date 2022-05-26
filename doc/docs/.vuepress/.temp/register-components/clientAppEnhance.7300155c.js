import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("GfIcons", defineAsyncComponent(() => import("/Users/guangfa/Desktop/guangfaMac/guangfa/gfCode/web-components-gf/doc/_components/gf-Icons/index.vue")))
}
