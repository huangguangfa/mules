/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GfIconArrowLeft {
    }
    interface GfIconArrowRight {
    }
}
declare global {
    interface HTMLGfIconArrowLeftElement extends Components.GfIconArrowLeft, HTMLStencilElement {
    }
    var HTMLGfIconArrowLeftElement: {
        prototype: HTMLGfIconArrowLeftElement;
        new (): HTMLGfIconArrowLeftElement;
    };
    interface HTMLGfIconArrowRightElement extends Components.GfIconArrowRight, HTMLStencilElement {
    }
    var HTMLGfIconArrowRightElement: {
        prototype: HTMLGfIconArrowRightElement;
        new (): HTMLGfIconArrowRightElement;
    };
    interface HTMLElementTagNameMap {
        "gf-icon-arrow-left": HTMLGfIconArrowLeftElement;
        "gf-icon-arrow-right": HTMLGfIconArrowRightElement;
    }
}
declare namespace LocalJSX {
    interface GfIconArrowLeft {
    }
    interface GfIconArrowRight {
    }
    interface IntrinsicElements {
        "gf-icon-arrow-left": GfIconArrowLeft;
        "gf-icon-arrow-right": GfIconArrowRight;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gf-icon-arrow-left": LocalJSX.GfIconArrowLeft & JSXBase.HTMLAttributes<HTMLGfIconArrowLeftElement>;
            "gf-icon-arrow-right": LocalJSX.GfIconArrowRight & JSXBase.HTMLAttributes<HTMLGfIconArrowRightElement>;
        }
    }
}