import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.mixin({
            created() {
                console.log(111)
            },
            mounted() {

            }
        })
    },
    setup() {
        // const script = document.createElement('script')
        // const cssLink = document.createElement('link')
        // cssLink.setAttribute('rel', 'stylesheet');
        // cssLink.setAttribute('href', 'https://unpkg.com/@gf-ui/components@0.0.11/dist/sten-components/sten-components.css');
        // script.src = '../sten-components/sten-components.esm.js'
        // script.type = 'module'
        // document.head.append(cssLink)
        // document.head.append(script)
    },
    rootComponents: [],
})