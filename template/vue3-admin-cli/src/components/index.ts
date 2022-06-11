export const initGlobalComponent = function (app) {
    let compnentsList = [

    ];
    for (let i = 0, len = compnentsList.length; i < len; i++) {
        let { name, compnent } = compnentsList[i];
        app.component(name, compnent)
    }
}