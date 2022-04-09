import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-US',
    title: '@gf-ui',
    description: 'Just playing around',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        navbar : [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ],
        // sidebar: {
        //     '/' : [
        //         "/",        //指的是根目录的md文件 也就是 README.md 里面的内容
        //         "guide",    
        //         "guide/page",    
        //     ]
        // },
        logo: 'https://blogs-macos.oss-cn-shenzhen.aliyuncs.com/tabbar-navigation/blogs.png',
    }
})