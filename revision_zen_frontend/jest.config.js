/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const path = require('path');

/** @type {import('jest').Config} */
const config = {
  // ... autres configurations ...

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: 'jsdom',

  // Ajoutez d'autres configurations nécessaires ici

  // Configuration pour gérer les fichiers CSS
  moduleNameMapper: {
    '\\.module\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
};

module.exports = config;
