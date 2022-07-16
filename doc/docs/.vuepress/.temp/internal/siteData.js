export const siteData = JSON.parse("{\"base\":\"/doc/\",\"lang\":\"zh-CN\",\"title\":\"gf-ui系列文档\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/css/reset.css\"}]],\"locales\":{\"/zh/core\":{\"lang\":\"简体中文\"},\"/en/\":{\"lang\":\"English\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
