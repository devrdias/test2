const { name } = require('./package.json');
const {
  getWebPreset,
  getIOSPreset,
  getAndroidPreset,
} = require('jest-expo/config/getPlatformPreset');

module.exports = {
  projects: [getWebPreset(), getIOSPreset(), getAndroidPreset()].map((preset) => {
    delete preset.watchPlugins;
    return { ...preset };
  }),
  preset: 'react-native',
  testEnvironment: 'node',
  transform: { '^.+\\.(js|ts|tsx)$': 'babel-jest' },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|styled-components|@testing-library)',
  ],
  setupFilesAfterEnv: ['jest-styled-components', '<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '\\.test\\.tsx?$',
  verbose: true,
  displayName: name,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: name,
        suiteNameTemplate: function (vars) {
          return (vars.displayName.name ? '[' + vars.displayName.name + '] ' : '') + vars.filepath;
        },
        outputDirectory: 'test-results',
      },
    ],
  ],
  cacheDirectory: '.jest/cache',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/index.{ts,tsx}'],
  coverageDirectory: 'test-reports',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'babel',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
