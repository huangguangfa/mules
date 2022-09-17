module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'babel-eslint',
  extends: [],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 7,
    sourceType: 'module',
  },
  ecmaFeatures: {
    legacyDecorators: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 0,
  },
};
