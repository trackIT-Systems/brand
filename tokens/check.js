// Checks the built tokens (dist/tokens.json) against the contrast rules in DESIGN.md.
// Run after the build: npm run check.
import { readFileSync } from 'node:fs';

const { color } = JSON.parse(readFileSync('dist/tokens.json', 'utf8'));
const errors = [];

// WCAG 2.1 contrast ratio
const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const role = (name) => {
  if (!color.role[name]) errors.push(`role "${name}" is missing`);
  return color.role[name];
};
const require = (fg, bg, min) => {
  const [a, b] = [role(fg), role(bg)];
  if (!a || !b) return;
  const ratio = contrast(a, b);
  if (ratio < min) errors.push(`${fg} on ${bg}: ${ratio.toFixed(2)}:1, needs ${min}:1`);
};

// Approved text pairs (DESIGN.md, Color): body text needs 4.5:1.
for (const fg of ['text', 'heading', 'link']) {
  for (const bg of ['page-background', 'surface', 'surface-subtle']) require(fg, bg, 4.5);
}
for (const name of Object.keys(color.role)) {
  if (name.startsWith('on-')) require(name, name.slice(3), 4.5);
}

// Control boundaries and focus need 3:1 (WCAG 1.4.11).
for (const fg of ['border-control', 'focus-ring']) {
  for (const bg of ['page-background', 'surface']) require(fg, bg, 3);
}

// Ratios stated in the contrast table of DESIGN.md must match the tokens.
const design = readFileSync('DESIGN.md', 'utf8');
for (const [, fg, bg, stated] of design.matchAll(/^\| \**([a-z-]+) on ([a-z-]+)\** \| \**([\d.]+):1/gm)) {
  const [a, b] = [color.palette[fg], color.palette[bg]];
  if (!a || !b) {
    errors.push(`DESIGN.md: "${fg} on ${bg}" names a color that is not in the palette`);
    continue;
  }
  const actual = contrast(a, b).toFixed(2);
  if (actual !== stated) errors.push(`DESIGN.md: ${fg} on ${bg} is ${actual}:1, not ${stated}:1`);
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log('✔︎ tokens meet the contrast rules in DESIGN.md');
