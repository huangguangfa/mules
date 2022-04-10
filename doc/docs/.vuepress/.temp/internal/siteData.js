export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "@gf-ui",
  "description": "",
  "head": [],
  "locales": {
    "/zh/core": {
      "lang": "简体中文"
    },
    "/en/": {
      "lang": "English"
    }
  }
}

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
