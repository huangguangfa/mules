import type { App, Component } from 'vue'
type CompnentsList = Array<{
    name: string,
    compnent: Component
}>
export const initGlobalComponent = function (app: App) {
    let compnentsList: CompnentsList = [

    ];
    for (let i = 0, len = compnentsList.length; i < len; i++) {
        let { name, compnent } = compnentsList[i];
        app.component(name, compnent)
    }
}