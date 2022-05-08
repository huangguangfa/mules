/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonColor, ButtonSize } from "./types/gf-button";
export namespace Components {
    interface GfButton {
        "_internal": () => Promise<void>;
        "circle": boolean;
        "classNames": string;
        "color": ButtonColor;
        "disabled": boolean;
        "plain": boolean;
        "size": ButtonSize;
        "textColor": string;
    }
    interface GfButtonGroup {
    }
    interface StenButton {
        /**
          * **********************     装饰器 Start     * *******************
         */
        "name": string;
        "show": () => Promise<void>;
    }
}
declare global {
    interface HTMLGfButtonElement extends Components.GfButton, HTMLStencilElement {
    }
    var HTMLGfButtonElement: {
        prototype: HTMLGfButtonElement;
        new (): HTMLGfButtonElement;
    };
    interface HTMLGfButtonGroupElement extends Components.GfButtonGroup, HTMLStencilElement {
    }
    var HTMLGfButtonGroupElement: {
        prototype: HTMLGfButtonGroupElement;
        new (): HTMLGfButtonGroupElement;
    };
    interface HTMLStenButtonElement extends Components.StenButton, HTMLStencilElement {
    }
    var HTMLStenButtonElement: {
        prototype: HTMLStenButtonElement;
        new (): HTMLStenButtonElement;
    };
    interface HTMLElementTagNameMap {
        "gf-button": HTMLGfButtonElement;
        "gf-button-group": HTMLGfButtonGroupElement;
        "sten-button": HTMLStenButtonElement;
    }
}
declare namespace LocalJSX {
    interface GfButton {
        "circle"?: boolean;
        "classNames"?: string;
        "color"?: ButtonColor;
        "disabled"?: boolean;
        "onOn-click"?: (event: CustomEvent<{ data: Object }>) => void;
        "plain"?: boolean;
        "size"?: ButtonSize;
        "textColor"?: string;
    }
    interface GfButtonGroup {
    }
    interface StenButton {
        /**
          * **********************     装饰器 Start     * *******************
         */
        "name"?: string;
        "onStenButton-show"?: (event: CustomEvent<{ name: string }>) => void;
    }
    interface IntrinsicElements {
        "gf-button": GfButton;
        "gf-button-group": GfButtonGroup;
        "sten-button": StenButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gf-button": LocalJSX.GfButton & JSXBase.HTMLAttributes<HTMLGfButtonElement>;
            "gf-button-group": LocalJSX.GfButtonGroup & JSXBase.HTMLAttributes<HTMLGfButtonGroupElement>;
            "sten-button": LocalJSX.StenButton & JSXBase.HTMLAttributes<HTMLStenButtonElement>;
        }
    }
}
