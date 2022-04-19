import { FunctionalComponent, h, Host } from '@stencil/core';

interface StenIconProps {
    
}
export const Icon: FunctionalComponent<StenIconProps> = () => {
    return (
        <Host>
            <slot></slot>
        </Host>
    );
}