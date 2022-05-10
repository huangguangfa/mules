import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("gfIcons", defineAsyncComponent(() => import("/Users/guangfa/Desktop/guangfaMac/guangfa/gfCode/web-components-gf/doc/_components/gf-Icons/index.vue")))
}
