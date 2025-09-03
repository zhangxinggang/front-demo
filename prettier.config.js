module.exports = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: true,
  proseWrap: 'never',
  endOfLine: 'auto',
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@(.*)', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
  importOrderGroupNamespaceSpecifiers: false,
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
