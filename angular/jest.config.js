module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/test/setup-jest.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/src/test.ts",
    "src/app/test"
  ],
  coveragePathIgnorePatterns: ['src/app/test',],
  globals: {
    "ts-jest": {
      "diagnostics": "",
      "tsConfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$",
      "astTransformers": [
        "<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer"
      ]
    }
  }
}
