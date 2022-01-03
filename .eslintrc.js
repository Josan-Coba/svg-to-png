module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['/dist', '.*', '/node_modules'],
  overrides: [
    {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: [
          'tsconfig.json',
          'tsconfig.tests.json',
          'cypress/tsconfig.json',
        ],
      },
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      rules: {
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: {
              memberTypes: [
                // Index signature
                'signature',

                // Fields
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-decorated-field',
                'protected-decorated-field',
                'private-decorated-field',

                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',

                'public-abstract-field',
                'protected-abstract-field',
                'private-abstract-field',

                'public-field',
                'protected-field',
                'private-field',

                'static-field',
                'instance-field',
                'abstract-field',

                'decorated-field',

                'field',

                // Constructors
                'public-constructor',
                'protected-constructor',
                'private-constructor',

                'constructor',

                // Methods
                'public-static-method',
                'protected-static-method',
                'private-static-method',

                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',

                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',

                'public-abstract-method',
                'protected-abstract-method',
                'private-abstract-method',

                'public-method',
                'protected-method',
                'private-method',

                'static-method',
                'instance-method',
                'abstract-method',

                'decorated-method',

                'method',
              ],
              order: 'alphabetically',
            },
          },
        ],
        'import/default': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default-member': 'off',
        // 'import/no-named-as-default': 'off',
        // 'import/no-cycle': 'off',
        // 'import/no-unused-modules': 'off',
        // 'import/no-deprecated': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
      settings: {
        'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
        'import/external-module-folders': [
          'node_modules',
          'node_modules/@types',
        ],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        'react': {
          version: 'detect',
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import'],
  root: true,
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-cycle': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': 'warn',
  },
}
