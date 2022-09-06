/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'warn',
		'no-tabs': 'off',
		'no-console': 'off',
		'func-names': 'off',
		'no-process-exit': 'off',
		'object-shorthand': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'import/extensions': 'off',
		'no-restricted-syntax': 'off',
		'no-plusplus': 'off',
		'no-extra-boolean-cast': 'off',
		'prefer-template': 'off',
		'default-param-last': 'off',
		'import/no-dynamic-require': 'off',
		'prefer-regex-literals': 'off',
		'import/prefer-default-export': 'off',
		'no-prototype-builtins': 'off',
		'no-shadow': ['error', { allow: ['state', 'getters'] }],
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'],
			},
		],
		'prefer-destructuring': ['error', { object: true, array: false }],

		'vue/attribute-hyphenation': 'off',
		'import/no-extraneous-dependencies': 'off',
		'vue/no-v-html': 'off',
	},
}
