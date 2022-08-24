module.exports = {
    collectCoverageFrom: [
        "src/js/modules/*.js",
        "!**/node_modules/**",
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
