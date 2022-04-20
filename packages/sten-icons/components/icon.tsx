import { FunctionalComponent, h } from "@stencil/core";

interface IconProps{

}

export const Icon: FunctionalComponent<IconProps> = () => {
    return (
        <div>
            能出来Icon
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle cx="100" cy="50" r="40" stroke="black"
                stroke-width="2" fill="red" />
            </svg>
        </div>
    )
}