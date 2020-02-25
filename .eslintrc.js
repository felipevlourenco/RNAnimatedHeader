module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 0,
    'comma-dangle': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'off',
    'eslint-disable-line': 'off',
    'no-bitwise': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
