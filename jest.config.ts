import type { Config } from '@jest/types';

const baseDir = '<rootDir>/src/';

const jestConfig: Config.InitialOptions = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: 'node',
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch: [
        `**/__tests__/**/*.+(ts|tsx|js)`,
    ],
};

export default jestConfig;