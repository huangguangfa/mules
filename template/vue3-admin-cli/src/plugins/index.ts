import { initGlobalComponent } from "@/components/index";
import { initGlobalDirectives } from "@/directives/index";
import EventBus from "@/libs/event-bus";
export function initGlobalMethods(app: any) {
    // eventBus
    app.config.globalProperties.$eventBus = new EventBus();
    // 初始化全局组件
    initGlobalComponent(app);
    // 初始化全局指令
    initGlobalDirectives(app);
}