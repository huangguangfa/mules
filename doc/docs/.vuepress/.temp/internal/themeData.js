export const themeData = {
  "selectLanguageText": "简体中文",
  "navbar": [
    {
      "text": "JS库",
      "children": [
        {
          "text": "@gf-ui/core",
          "link": "/zh/core/install/"
        },
        {
          "text": "@gf-ui/sten-icons",
          "link": "/zh/sten-icon/install"
        }
      ]
    }
  ],
  "sidebar": {
    "/zh/core/": [
      {
        "text": "@gf-ui/core",
        "children": [
          {
            "text": "安装",
            "link": "/zh/core/install"
          },
          {
            "text": "Type(类型检查)",
            "link": "/zh/core/type"
          }
        ]
      }
    ],
    "/zh/sten-icon/": [
      {
        "text": "@gf-ui/sten-icon",
        "children": [
          {
            "text": "安装",
            "link": "/zh/sten-icon/install"
          }
        ]
      }
    ]
  },
  "notFound": [
    "您输入的URL不对、请返回首页吧"
  ],
  "logo": "https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
