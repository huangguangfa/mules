export default {
    "/zh/core/": [
        {
            text: 'gf-ui/core',
            children: [
                '/zh/core/install',
                '/zh/core/type',
                '/zh/core/ctypto',
                '/zh/core/storage'

            ]
        }
    ],
    "/zh/components/": [
        {
            text: '跨框架UI库',
            children: [
                {
                    text: '安装',
                    link: '/zh/components/install',
                },
                {
                    text: '基础组件',
                    children: [
                        {
                            text: 'Button 按钮',
                            link: '/zh/components/button',
                        },
                        {
                            text: 'Icon 图标',
                            link: '/zh/components/icon',
                        },
                        {
                            text: 'Input 输入框',
                            link: '/zh/components/input',
                        }
                    ]
                }
            ]
        }
    ],
}


