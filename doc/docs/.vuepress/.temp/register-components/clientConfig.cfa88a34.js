import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FooBar", defineAsyncComponent(() => import("/Users/guangfa/Desktop/guangfaMac/guangfa/gfCode/web-components-gf/doc/_components/gf-Icons/index.vue")))
  },
}
