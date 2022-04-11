import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-2d0a870d","/en/",{"title":"title"},["/en/index.html","/en/README.md"]],
  ["v-4e0f94d9","/zh/sten-icon/install.html",{"title":"sten-icon"},["/zh/sten-icon/install","/zh/sten-icon/install.md"]],
  ["v-2b5b6848","/zh/core/",{"title":"core首页"},["/zh/core/index.html","/zh/core/README.md"]],
  ["v-7e1abf34","/zh/core/install.html",{"title":"安装"},["/zh/core/install","/zh/core/install.md"]],
  ["v-11de8e97","/zh/core/type.html",{"title":"Type"},["/zh/core/type","/zh/core/type.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
