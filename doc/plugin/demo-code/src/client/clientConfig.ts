import { defineClientConfig } from '@vuepress/client'
import DemoAndCode from './DemoAndCode.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DemoAndCode', DemoAndCode)
  },
  setup() {

  },
  rootComponents: []
})
