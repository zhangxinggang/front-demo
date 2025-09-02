const fabric = require('@umijs/fabric');
module.exports = {
  ...fabric.prettier,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: true,
  endOfLine: 'auto',
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@(.*)', '^[./]'],
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
    {
      files: '*rc',
      options: {
        parser: 'json',
      },
    },
  ],
};
