import { defineClientAppEnhance } from '@vuepress/client';
import { injectComponents } from "../../gf-ui-register-components/index"
export default defineClientAppEnhance(({ app, router, siteData }) => {
    // 过滤我们的测试组件、不让vue做组件解析
    // app.config.ignoredElements = [/gf-\w*/];
    injectComponents()
    console.log('111111', app.config)
})