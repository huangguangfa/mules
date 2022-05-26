import { defineClientAppEnhance } from '@vuepress/client';
import { injectComponents } from "../../gf-ui-register-components/index";
export default defineClientAppEnhance(({ app }) => {
    let state = {
        isLoadComponents: false
    }
    app.mixin({
        mounted() {
            if (!state.isLoadComponents) {
                state.isLoadComponents = true
                const script = document.createElement('script')
                script.src = 'https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.esm.js'
                script.type = 'module'
                document.head.append(script)
            }
        }
    })
    injectComponents()
})