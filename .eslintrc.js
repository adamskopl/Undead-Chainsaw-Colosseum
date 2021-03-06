module.exports = {
  'extends': 'airbnb-base',
  'settings': {
    'import/resolver': {
      'jspm': {
        'moduleDirectory': 'jspm_packages'
      }
    }
  },
  'rules': {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-rest-params': 'off',
    'max-len': ['error', 80],
    'no-use-before-define': 'off',
    'no-console': 'off',
    'prefer-arrow-callback': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'prefer-const': 'off',
    'comma-dangle': 'off',
  },
  'globals': {
    'Phaser': true
  },
  'env': {
    'browser': true,
  },
  'plugins': [
    'import'
  ]
};
