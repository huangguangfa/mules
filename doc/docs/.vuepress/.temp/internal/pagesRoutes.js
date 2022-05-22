import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-2d0a870d","/en/",{"title":"title"},["/en/index.html","/en/README.md"]],
  ["v-56bebe96","/zh/components/button.html",{"title":"button"},["/zh/components/button","/zh/components/button.md"]],
  ["v-238c7d6f","/zh/components/icon.html",{"title":"button"},["/zh/components/icon","/zh/components/icon.md"]],
  ["v-09456080","/zh/components/input.html",{"title":"input"},["/zh/components/input","/zh/components/input.md"]],
  ["v-0239b762","/zh/components/install.html",{"title":"sten-icon"},["/zh/components/install","/zh/components/install.md"]],
  ["v-2b5b6848","/zh/core/",{"title":"core首页"},["/zh/core/index.html","/zh/core/README.md"]],
  ["v-d016c4a4","/zh/core/ctypto.html",{"title":"Crypto类"},["/zh/core/ctypto","/zh/core/ctypto.md"]],
  ["v-7e1abf34","/zh/core/install.html",{"title":"安装"},["/zh/core/install","/zh/core/install.md"]],
  ["v-7d1f8f86","/zh/core/storage.html",{"title":"Storage类"},["/zh/core/storage","/zh/core/storage.md"]],
  ["v-11de8e97","/zh/core/type.html",{"title":"Type类"},["/zh/core/type","/zh/core/type.md"]],
  ["v-4e0f94d9","/zh/sten-icon/install.html",{"title":"sten-icon"},["/zh/sten-icon/install","/zh/sten-icon/install.md"]],
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
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
