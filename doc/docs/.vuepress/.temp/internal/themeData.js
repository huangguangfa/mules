export const themeData = {
  "selectLanguageText": "简体中文",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "tip": "提示",
  "warning": "注意",
  "danger": "警告",
  "backToHome": "返回首页",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换夜间模式",
  "toggleSidebar": "切换侧边栏",
  "navbar": [
    {
      "text": "gf-ui系列库",
      "children": [
        {
          "text": "@gf-ui/components",
          "link": "/zh/components/install"
        },
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
          "/zh/core/install",
          "/zh/core/type",
          "/zh/core/ctypto",
          "/zh/core/storage"
        ]
      }
    ],
    "/zh/components/": [
      {
        "text": "@gf-ui/components",
        "children": [
          {
            "text": "安装",
            "link": "/zh/components/install"
          },
          {
            "text": "基础组件",
            "children": [
              {
                "text": "Button 按钮",
                "link": "/zh/components/button"
              },
              {
                "text": "Icon 图标",
                "link": "/zh/components/icon"
              }
            ]
          }
        ]
      }
    ]
  },
  "notFound": [
    "您当前路径不存在、请返回首页吧"
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
  "contributors": true
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
