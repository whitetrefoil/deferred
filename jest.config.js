const config = {
  collectCoverage           : true,
  collectCoverageFrom       : [
    'src/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
  ],
  coveragePathIgnorePatterns: [
    '/~.*',
  ],
  coverageReporters         : [
    'text-summary',
  ],
  globals                   : {
    'ts-jest': {
      tsconfig   : 'tests/tsconfig.json',
      babelConfig: false,
      useESM     : true,
    },
  },
  // moduleFileExtensions      : [
  //   'jsx',
  //   'js',
  //   'json',
  //   'tsx',
  //   'ts',
  // ],
  moduleNameMapper       : {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/file-mock.ts',
    '\\.(css|less|sass|scss)$'                                                           : '<rootDir>/tests/style-mock.ts',
    '^(\\.{1,2}/.*)\\.js$'                                                               : '$1',
    '^~/(.*)\\.js$'                                                                      : '<rootDir>/src/$1',
    '^~/(.*)$'                                                                           : '<rootDir>/src/$1',
  },
  preset                 : 'ts-jest/presets/js-with-ts-esm',
  reporters              : [
    'default',
  ],
  testRegex              : '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  transformIgnorePatterns: [
    // '<rootDir>/node_modules',
  ],
}

export default config
