export const data = JSON.parse("{\"key\":\"v-7cb45863\",\"path\":\"/zh/components/use.html\",\"title\":\"框架集成\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"框架集成\",\"date\":\"2017-12-28  // 时间格式，日期是可以填写 时分秒 的，格式为 2019-10-20 00:00:00。\",\"tags\":[\"vue\",\"webpack\"],\"description\":\"页面的描述\",\"prev\":\"./install.md\",\"next\":\"./button.md\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1654175120000,\"contributors\":[{\"name\":\"hgf\",\"email\":\"1454556135@qq.com\",\"commits\":4}]},\"filePathRelative\":\"zh/components/use.md\",\"readingTime\":{\"minutes\":1.29,\"words\":387}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
