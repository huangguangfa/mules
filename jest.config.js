
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [
        "**/__tests__/**/*.test.ts"
    ],
    // transform: {
    //     "^.+\\.jsx?$": "./scripts/jest/babel.jest.config.js"
    // },
    projects: ["<rootDir>/packages/core/*"]
};