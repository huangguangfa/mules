// import type { AxiosStatic } from 'axios'

declare module AxiosStatic {
   function getName():string
}

// 扩展Element
export interface AxiosStatic {
    getName():string
}

