module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'google',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/no-extraneous-dependencies': 0,
        'no-console': 0,
        'no-underscore-dangle': 0,
        'no-restricted-globals': 0,
        'linebreak-style': 0,
        'require-jsdoc': 0,
        'quote-props': ['error', 'as-needed'],
        indent: 'off',
        'object-curly-spacing': ['error', 'always'],
        'new-cap': ['error', { capIsNew: false }],
        'max-len': ['error', { code: 150 }],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'space-before-function-paren': 0,
    },
};
