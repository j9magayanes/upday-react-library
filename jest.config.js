module.exports = {
    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    testEnvironment: 'jsdom',
    testMatch: ['src/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testURL: 'http://localhost',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
      },
    verbose: false,

  };