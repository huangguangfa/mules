const { optimize } = require('svgo');
const { parse } = require('svgson')

function svgo(svgContent, svgFileName) {
    return new Promise((resolve, reject) => {
        try {
            const { data } = optimize(svgContent, {
                name: 'preset-default',
                params: {
                    overrides: {
                        convertShapeToPath: {
                            convertArcs: true
                        },
                        convertPathData: false
                    }
                },
                plugins: [
                    {
                        name: 'convertColors',
                        params: { currentColor: /^(?!url|none)./ }
                    },
                    {
                        name: 'cleanupListOfValues',
                        active: true
                    },
                    {
                        name: 'removeStyleElement',
                        active: true
                    },
                    {
                        name: 'removeViewBox',
                        active: false
                    },
                    {
                        name: 'removeDimensions',
                        active: true
                    },
                ]
            })
            // 彩色不执行去颜色配置
            parse(svgFileName.slice(-2) === '-c' ? svgContent : data).then(r => resolve(r));
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = svgo;