
module.exports = {
    testEnvironment: "jsdom",
    preset: "ts-jest",
    testMatch: [
        "**/__tests__/**/*.test.ts"
    ],
    globals: {
        'ts-jest': {
            tsconfig: {
                target: 'esnext',
                sourceMap: true
            }
        }
    },
    // coverageDirectory: ['coverage'],
    coverageReporters: ['html', 'lcov', 'text'],
    rootDir: __dirname
};