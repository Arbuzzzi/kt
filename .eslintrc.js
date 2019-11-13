module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'any',
        'normal': 'any',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
