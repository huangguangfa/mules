import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"页面的标题"},["/index.html","/README.md"]],
  ["v-953546a4","/test.html",{"title":"页面的标题"},["/test","/test.md"]],
  ["v-fffb8e28","/guide/",{"title":"guide"},["/guide/index.html","/guide/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-6ce48554","/contributing.html",{"title":"contributing"},["/contributing","/contributing.md"]],
  ["v-4eaf9f84","/guide/page.html",{"title":"cuide-page"},["/guide/page","/guide/page.md"]],
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
