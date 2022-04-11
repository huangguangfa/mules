const { extendDefaultPlugins } = require('svgo');


const svgoPlugins = extendDefaultPlugins([
    {
        name: 'removeAttrs',
        active: true,
        params: {
            elemSeparator: ',', //解析属性分隔符
            attrs: ['style', 'fill', 'xml:space']
        }
    }
])

module.exports = {
    multipass: true,
    plugins: svgoPlugins
}