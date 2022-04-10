import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import sidebar from "../../config/sidebar.config";
export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: '@gf-ui',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    locales: {
        '/zh/core': {
            lang: '简体中文',
        },
        '/en/': {
            lang: 'English',
        }
    },
    plugins: [
        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/zh': {
                        placeholder: '搜索文档'
                    }
                },
            },
        ]
    ],
    themeConfig: {
        selectLanguageText: '简体中文',
        repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        author: {
            name: 'xugaoyi', // 必需
            link: 'https://github.com/xugaoyi', // 可选的
        },
        navbar: [
            {
                text: 'JS库',
                children: [
                    {
                        text: "@gf-ui/core",
                        link: "/zh/core/install/"
                    },
                    {
                        text: "@gf-ui/sten-icons",
                        link: "/zh/sten-icon/install",
                    }
                ]
            }
        ],
        sidebar,
        notFound: ['您输入的URL不对、请返回首页吧'],
        logo: 'https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png',
    },
})