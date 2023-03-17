module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['prettier', 'react', '@typescript-eslint'],
    rules: {
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': [0],
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/destructuring-assignment': 'off',
        'react/display-name': 'off',
        'func-names': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
    },
};
