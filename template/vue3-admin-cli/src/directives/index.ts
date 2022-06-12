import clickOutside from './global/click-outside'
import type { App } from 'vue'

import type {
    ObjectDirective
} from 'vue'
export function initGlobalDirectives(app: App) {
    let directivesList: { [Key: string]: ObjectDirective } = {
        "click-outside": clickOutside, // v-click-outside 点击节点外部区域
    };
    Object.keys(directivesList).map((key: string) => {
        app.directive(key, directivesList[key]);
    })
}