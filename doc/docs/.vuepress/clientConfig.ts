import { injectComponents } from "../../gf-ui-register-components/index";
import { defineClientConfig } from '@vuepress/client'
const state = {
    isLoadComponents: false
}
export default defineClientConfig({
    enhance({ app, router, siteData }) {
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
    },
    setup() {

    },
    rootComponents: [],
})