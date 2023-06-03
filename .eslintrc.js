module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        // Reason: This allows for defining interfaces in any order
        'no-use-before-define': 'off',
        // Reason: This allows services to be exported as their name from index.ts
        'import/no-named-as-default': 'off',
        // Reason: This allows nested index.ts to pass through exports without naming them
        'import/export': 'off',
        // Reason: Triggers on page names like [id].vue
        'vue/multi-word-component-names': 'off',
        // Reason: Opinionated not to have useless empty lines with just a closing tag
        'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: true,
                ignores: [],
            },
        ],
    },
};
