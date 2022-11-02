module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-extra-semi': 'error',
    // 静止使用var
    'no-var': 'error',
    // 禁止出现未使用过的变量
    'no-unused-vars': 'error',
    //  一行中的多个不用于缩进的空格通常是错误的
    'no-multi-spaces': 'error',
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 双峰驼命名格式
    'camelcase': 0,
    // 双引号
    'quotes': ['error', 'single'],
    // 2格缩进
    'indent': ['error', 2],
    // 禁止使用空解构
    'no-empty-pattern': 'error',
  },
};
