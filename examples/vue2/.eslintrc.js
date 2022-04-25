module.exports = {
    root: true,
    env: {
        node: true,
    },

    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: [2, 4],
    }
};
