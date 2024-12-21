module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
};