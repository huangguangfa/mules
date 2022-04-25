module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [],
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-vars': 0,
        indent: [2, 4],
    }
}