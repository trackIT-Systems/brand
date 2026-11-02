// Builds the design tokens into dist/. See ADR-0005 and tokens/README.md.
import StyleDictionary from 'style-dictionary';

// Variable names follow Tailwind's theme namespaces (--color-*, --radius-*, --font-*,
// --font-weight-*), so one file serves plain CSS and Tailwind.
// color.role.cta → --color-cta, color.palette.mint → --color-palette-mint,
// font.family.display → --font-display.
StyleDictionary.registerTransform({
  name: 'name/trackit',
  type: 'name',
  transform: (token) =>
    token.path.filter((part) => part !== 'role' && part !== 'family').join('-'),
});

// DTCG writes dimensions as { value, unit }; Style Dictionary 5.6 does not resolve that form.
StyleDictionary.registerTransform({
  name: 'dimension/dtcg',
  type: 'value',
  filter: (token) => token.$type === 'dimension' && typeof token.$value === 'object',
  transform: (token) => `${token.$value.value}${token.$value.unit}`,
});

const transforms = ['attribute/cti', 'name/trackit', 'color/css', 'fontFamily/css', 'dimension/dtcg'];

const sd = new StyleDictionary({
  source: ['tokens/*.tokens.json'],
  platforms: {
    css: {
      transforms,
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
        {
          destination: 'theme.css',
          format: 'css/variables',
          options: { selector: '@theme' },
        },
      ],
    },
    json: {
      transforms,
      buildPath: 'dist/',
      files: [{ destination: 'tokens.json', format: 'json/nested' }],
    },
  },
});

await sd.buildAllPlatforms();
