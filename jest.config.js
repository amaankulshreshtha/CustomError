module.exports = {
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],

  coverageReporters: ['text-summary'],

  verbose: true
};
