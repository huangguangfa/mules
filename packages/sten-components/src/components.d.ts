/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonColor } from "../types/gf-button";
export namespace Components {
    interface GfButton {
        "color": ButtonColor;
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
    interface HTMLStenButtonElement extends Components.StenButton, HTMLStencilElement {
    }
    var HTMLStenButtonElement: {
        prototype: HTMLStenButtonElement;
        new (): HTMLStenButtonElement;
    };
    interface HTMLElementTagNameMap {
        "gf-button": HTMLGfButtonElement;
        "sten-button": HTMLStenButtonElement;
    }
}
declare namespace LocalJSX {
    interface GfButton {
        "color"?: ButtonColor;
    }
    interface StenButton {
        /**
          * **********************     装饰器 Start     * *******************
         */
        "name"?: string;
        "onStenButton-show"?: (event: CustomEvent<{ name:string }>) => void;
    }
    interface IntrinsicElements {
        "gf-button": GfButton;
        "sten-button": StenButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gf-button": LocalJSX.GfButton & JSXBase.HTMLAttributes<HTMLGfButtonElement>;
            "sten-button": LocalJSX.StenButton & JSXBase.HTMLAttributes<HTMLStenButtonElement>;
        }
    }
}
