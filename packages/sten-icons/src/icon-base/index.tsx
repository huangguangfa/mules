import { FunctionalComponent, h } from "@stencil/core";

interface IconProps {
    // size: number | string;
    // styles: object;
    // color: string;
    // rotate: number;
    // spin: boolean;
    // svgData: any;
}

// { size = 40, styles, color = '', rotate = '', spin, svgData }

export const Icons: FunctionalComponent<IconProps> = () => {
    return (
        <div>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1895" width="64" height="64">
                <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F79484" p-id="1896"></path>
                <path d="M609.28 494.08L577.28 409.6c-28.16-72.96-101.12-117.76-176.64-106.24-12.8-17.92-35.84-25.6-56.32-16.64-21.76 7.68-33.28 30.72-29.44 52.48-57.6 43.52-79.36 122.88-52.48 192l30.72 78.08c-17.92 23.04-21.76 53.76-11.52 80.64v1.28c3.84 10.24 10.24 20.48 17.92 28.16h1.28c6.4 6.4 14.08 8.96 23.04 8.96 2.56 0 5.12-1.28 10.24-2.56l314.88-121.6c2.56-1.28 3.84-1.28 6.4-3.84 8.96-5.12 14.08-14.08 14.08-23.04 0-11.52-1.28-24.32-6.4-34.56v-1.28c-10.24-21.76-29.44-40.96-53.76-47.36z" fill="#FFFFFF" opacity=".5" p-id="1897"></path>
                <path d="M482.56 729.6c0 32 25.6 57.6 57.6 57.6s57.6-25.6 57.6-57.6h-115.2z m254.72-165.12v-102.4c0-89.6-58.88-165.12-143.36-184.32-6.4-24.32-28.16-40.96-52.48-40.96-25.6 0-47.36 19.2-52.48 43.52-79.36 23.04-134.4 98.56-134.4 181.76v96c-28.16 17.92-44.8 48.64-44.8 81.92v1.28c0 12.8 2.56 25.6 7.68 37.12l1.28 1.28c3.84 8.96 11.52 15.36 20.48 17.92 2.56 1.28 6.4 1.28 11.52 1.28h382.72c2.56 0 5.12 0 7.68-1.28 11.52-1.28 20.48-8.96 24.32-17.92 5.12-11.52 7.68-25.6 7.68-38.4V640c0-29.44-12.8-56.32-35.84-75.52z" fill="#FFFFFF" p-id="1898"></path>
            </svg>
        </div>
    )
}

