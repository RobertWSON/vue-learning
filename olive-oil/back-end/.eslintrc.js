
module.exports = {
    env: {
        node: true,        // Enable Node.js global variables and scope
        es2021: true,      // Use ES2021 features
    },
    extends: [
        'eslint:recommended', // Use recommended rules
    ],
    parserOptions: {
        ecmaVersion: 12,   // ES2021
        sourceType: 'module',
    },
    rules: {
        // Add your custom rules here
        'no-console': 'warn',       // Warn on console usage
        'no-unused-vars': 'warn',  // Warn on unused variables
        'prefer-async-await': 'off', // Example: Disable specific rules
    },
};