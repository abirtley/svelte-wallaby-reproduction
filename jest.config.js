import pkg from 'ts-jest/presets/index.js';
const { defaultsESM: tsjPreset } = pkg;

export default {
  transform: {
    ...tsjPreset.transform,
    '^.+\\.svelte$': [
      "svelte-jester",
      {
        "preprocess": true,
        "enableSourcemap": true,
      }
    ],
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  moduleNameMapper: {
    '^\\$lib/(.*)': '<rootDir>/src/lib/$1',
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
