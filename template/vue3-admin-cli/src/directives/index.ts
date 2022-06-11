export { default as ClickOutside } from './click-outside'

export function initGlobalDirectives(app: any) {
    let directivesList: { [Key: string]: any } = {

    };
    Object.keys(directivesList).map((key: string) => {
        app.directive(key, directivesList[key]);
    })
}