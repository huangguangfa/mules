import { defineClientAppEnhance } from '@vuepress/client';
import { injectComponents } from "../../gf-ui-register-components/index";
export default defineClientAppEnhance(({ app }) => {
    injectComponents()
})