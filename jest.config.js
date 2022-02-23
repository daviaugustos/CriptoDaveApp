module.exports = {
  preset: 'react-native',
  setupFiles: ['./setup-test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)/).*/',
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.styles.{ts}',
    '!**/*.style.{ts}',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/routes/**',
    '!**/App.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
