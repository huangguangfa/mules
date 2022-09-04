import type { RouteRecordRaw } from 'vue-router'

export type ModuleRouters = Record<
  string,
  {
    [x: string]: Array<RouteRecordRaw>
  }
>

export type RouteRecordRawList = Array<RouteRecordRaw>
