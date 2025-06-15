module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/main.tsx',
    '!src/index.tsx',
    '!src/mocks/**',
    '!src/types.ts',
    '!src/**/*.d.ts',
    '!src/**/index.ts', // ignore all index.ts files
    '!src/config/**', // ignore config files
    '!src/layout/**', // ignore layout files
    '!src/App.tsx', // ignore root App
    '!src/ErrorBoundary.tsx', // ignore error boundary
    '!src/Root.tsx' // ignore root entry
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 90,
      statements: 90
    },
    'src/services/app.services.ts': {
      branches: 60,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};