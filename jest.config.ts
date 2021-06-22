export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.ts', '!<rootDir>/node_modules/'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
};
