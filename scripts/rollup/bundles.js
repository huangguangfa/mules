'use strict'

const bundles = [
  {
    entry: 'mules-core', // 模块名称
    outputDir: 'npm', // 打包输出的文件夹
    format: ['umd', 'es'], // 打包代码格式
    minifyWithProdErrorCodes: true, // 代码压缩
  },
]

function deepFreeze(o) {
  Object.freeze(o)
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop])
    }
  })
  return o
}

deepFreeze(bundles)

function getOriginalFilename(bundle) {
  let name = bundle.name || bundle.entry
  name = name.replace('/index.', '.').replace('/', '-')
  return `${name}.js`
}

function getFilename(bundle) {
  const originalFilename = getOriginalFilename(bundle)
  return originalFilename
}

module.exports = {
  bundles,
  getFilename,
}
