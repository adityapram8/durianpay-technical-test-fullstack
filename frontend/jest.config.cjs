/** @type {import('jest').Config} */
module.exports = {
  // Use jsdom to simulate browser APIs
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },

  // File extensions Jest will look for
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "vue"],

  // Transform rules
  transform: {
    // Use vue3-jest to compile .vue SFCs
    "^.+\\.vue$": "@vue/vue3-jest",
    // Use ts-jest for TypeScript files
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },

  // Module path aliases (match Nuxt conventions)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^~/(.*)$": "<rootDir>/app/$1",
    "^#app$": "<rootDir>/__mocks__/nuxt.ts",
    "^#imports$": "<rootDir>/__mocks__/nuxt.ts",
  },

  // Where to find tests
  testMatch: [
    "<rootDir>/tests/**/*.spec.ts",
    "<rootDir>/tests/**/*.test.ts",
    "<rootDir>/app/**/*.spec.ts",
    "<rootDir>/app/**/*.test.ts",
  ],

  // Directories to ignore
  testPathIgnorePatterns: ["/node_modules/", "/.nuxt/", "/.output/"],

  // Collect coverage from these files
  collectCoverageFrom: [
    "app/**/*.{ts,vue}",
    "!app/**/*.d.ts",
    "!app/**/*.spec.ts",
    "!app/**/*.test.ts",
  ],

  // Coverage output directory
  coverageDirectory: "coverage",

  // Setup files to run after the test framework is installed
  setupFilesAfterEnv: [],
};
