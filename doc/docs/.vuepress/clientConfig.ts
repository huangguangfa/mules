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
                    const cssLink = document.createElement('link')
                    cssLink.setAttribute('rel', 'stylesheet');
                    cssLink.setAttribute('href', 'https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.css');
                    script.src = 'https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.esm.js'
                    script.type = 'module'
                    document.head.append(cssLink)
                    document.head.append(script)
                }
            }
        })
    },
    setup() {

    },
    rootComponents: [],
})