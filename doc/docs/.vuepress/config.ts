import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import sidebar from "../../config/sidebar.config";
import { registerInternalComponents } from "../../config/plugins.config"
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
export default defineUserConfig<DefaultThemeOptions>({
    // bundler:viteBundler({
    //     viteOptions: {},
    //     vuePluginOptions: {},
    // }),
    // 站点配置
    lang: 'zh-CN',
    title: '@gf-ui系列文档',
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
    base: "/doc/",
    plugins: [
        ['@snippetors/vuepress-plugin-code-copy'],
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/zh': {
                        placeholder: '搜索文档'
                    }
                },
            }
        ],
        [
            'demo-code',
            {
                showText: '显示代码',
                hideText: '隐藏代码',
                minHeight: 0,
                styleStr: 'text-decoration: underline;',
            }
        ],
        registerComponentsPlugin({
            ...registerInternalComponents()
        }),
    ],
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
        ['link', { rel: 'icon', href: '/css/reset.css' }]
    ],
    bundlerConfig: {
        viteOptions: {
            dest: `/Users/guangfa/Desktop/guangfaMac/guangfa/gfCode/web-components-gf/doc/docs/.vuepress/aaa`
        }
    },
    themeConfig: {
        selectLanguageText: '简体中文',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
        navbar: [
            {
                text: 'gf-ui系列库',
                children: [
                    {
                        text: "@gf-ui/components",
                        link: "/zh/components/install",
                    },
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
        notFound: ['您当前路径不存在、请返回首页吧'],
        logo: 'https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png',
    }
})