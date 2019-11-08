module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/apollo-server.ts',
    '!<rootDir>/src/environment.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.d.ts',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.graphql?$': 'jest-transform-graphql',
  },
};
