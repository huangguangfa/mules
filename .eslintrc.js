module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "semi": [2, "never"],
        "no-console": 0,
        "comma-dangle": [2, "always-multiline"],
        "max-len": 0,
        "no-alert": "error"
    }
}
