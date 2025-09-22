import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const read = (relativePath) => fs.readFile(path.resolve(process.cwd(), relativePath), 'utf8');

const AAA_CONTRAST = 7;

const extractThemeMap = (source) => {
  const match = source.match(/export const formationThemes:[^=]+=\s*({[\s\S]+?});/);
  if (!match) {
    throw new Error('Unable to locate formationThemes declaration');
  }

  // eslint-disable-next-line no-new-func
  return Function(`return (${match[1]});`)();
};

const relativeLuminance = (hex) => {
  const rgb = hex.match(/[\da-f]{2}/gi).map((component) => parseInt(component, 16) / 255);

  const adjust = (channel) =>
    channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);

  const [r, g, b] = rgb.map(adjust);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrastRatio = (hexA, hexB) => {
  const luminanceA = relativeLuminance(hexA);
  const luminanceB = relativeLuminance(hexB);

  const [lighter, darker] = luminanceA > luminanceB ? [luminanceA, luminanceB] : [luminanceB, luminanceA];

  return (lighter + 0.05) / (darker + 0.05);
};

const formationPages = [
  'src/pages/HomePage.tsx',
  'src/pages/formations/FormationsSecourismePage.tsx',
  'src/pages/formations/FormationsIncendiePage.tsx',
  'src/pages/formations/secourisme/SSTPage.tsx',
  'src/pages/formations/secourisme/PSC1Page.tsx',
  'src/pages/formations/secourisme/MacSSTPage.tsx',
  'src/pages/formations/secourisme/GQSPage.tsx',
  'src/pages/formations/secourisme/PSE1Page.tsx',
  'src/pages/formations/secourisme/PSE2Page.tsx',
  'src/pages/formations/incendie/EPIPage.tsx',
  'src/pages/formations/incendie/ExtincteurPage.tsx',
  'src/pages/formations/incendie/EvacuationPage.tsx'
];

const legacyTokens = [
  'from-red-500',
  'to-red-600',
  'from-blue-500',
  'to-blue-600',
  'from-green-500',
  'to-green-600',
  'from-orange-500',
  'to-orange-600',
  'from-purple-500',
  'to-purple-600',
  'from-indigo-500',
  'to-indigo-600',
  'from-yellow-500',
  'to-yellow-600'
];

test('Formation pages no longer rely on legacy Tailwind color tokens', async () => {
  const contents = await Promise.all(formationPages.map(read));
  contents.forEach((content, index) => {
    legacyTokens.forEach((token) => {
      assert.equal(
        content.includes(token),
        false,
        `Legacy color token ${token} still present in ${formationPages[index]}`
      );
    });
  });
});

test('All formation themes expose gradient and button classes with accessible defaults', async () => {
  const source = await read('src/utils/formationThemes.ts');

  const expectedKeys = [
    'sst',
    'mac-sst',
    'psc1',
    'gestes-qui-sauvent',
    'pse1',
    'pse2',
    'epi',
    'extincteur',
    'evacuation'
  ];

  expectedKeys.forEach((key) => {
    const direct = `${key}: {`;
    const quoted = `'${key}': {`;
    assert.ok(
      source.includes(direct) || source.includes(quoted),
      `Missing formation theme for ${key}`
    );
  });

  const gradientMatches = [...source.matchAll(/gradient:\s*'([^']+)'/g)];
  assert.ok(gradientMatches.length >= expectedKeys.length, 'Every theme should declare a gradient');
  gradientMatches.forEach(([, gradient]) => {
    assert.ok(gradient.includes('#'), `Gradient definition ${gradient} should use hex colors`);
  });

  const buttonMatches = [...source.matchAll(/button:\s*'([^']+)'/g)];
  assert.ok(buttonMatches.length >= expectedKeys.length, 'Every theme should declare a button style');
  buttonMatches.forEach(([, button]) => {
    assert.ok(button.includes('text-white'), `Button style ${button} should keep white text for legibility`);
    assert.ok(button.includes('bg-['), `Button style ${button} should expose a solid background class`);
  });

  assert.match(
    source,
    /formationThemeKeys\s*=\s*Object\.keys\(formationThemes\)/,
    'formationThemeKeys should derive from the theme map'
  );
});

test('Formation themes guarantee WCAG AAA contrast for text usage', async () => {
  const source = await read('src/utils/formationThemes.ts');
  const themes = extractThemeMap(source);

  Object.entries(themes).forEach(([key, theme]) => {
    const gradientColors = theme.gradient.match(/#[0-9a-fA-F]{6}/g) ?? [];
    assert.ok(gradientColors.length >= 2, `Gradient for ${key} should declare at least two hex colours`);
    gradientColors.forEach((hex) => {
      const ratio = contrastRatio(hex, '#ffffff');
      assert.ok(
        ratio >= AAA_CONTRAST,
        `Gradient colour ${hex} for ${key} should reach AAA contrast with white text (ratio=${ratio.toFixed(2)})`
      );
    });

    const buttonColours = [...new Set(theme.button.match(/#[0-9a-fA-F]{6}/g) ?? [])];
    assert.ok(buttonColours.length >= 1, `Button for ${key} should declare at least one hex background colour`);
    buttonColours.forEach((hex) => {
      const ratio = contrastRatio(hex, '#ffffff');
      assert.ok(
        ratio >= AAA_CONTRAST,
        `Button background ${hex} for ${key} should reach AAA contrast with white text (ratio=${ratio.toFixed(2)})`
      );
    });

    const textColours = [...new Set(theme.text.match(/#[0-9a-fA-F]{6}/g) ?? [])];
    assert.ok(textColours.length === 1, `Text colour for ${key} should expose exactly one hex value`);
    textColours.forEach((hex) => {
      const ratio = contrastRatio(hex, '#ffffff');
      assert.ok(
        ratio >= AAA_CONTRAST,
        `Text colour ${hex} for ${key} should reach AAA contrast on a white background (ratio=${ratio.toFixed(2)})`
      );
    });
  });
});

test('Formation colour palette is documented alongside their hex values', async () => {
  const [source, documentation] = await Promise.all([
    read('src/utils/formationThemes.ts'),
    read('docs/formation-colors.md')
  ]);

  const themes = extractThemeMap(source);

  Object.entries(themes).forEach(([key, theme]) => {
    assert.ok(
      documentation.includes(key),
      `Documentation should mention the ${key} formation key`
    );

    const hexValues = new Set([
      ...(theme.gradient.match(/#[0-9a-fA-F]{6}/g) ?? []),
      ...(theme.button.match(/#[0-9a-fA-F]{6}/g) ?? []),
      ...(theme.text.match(/#[0-9a-fA-F]{6}/g) ?? [])
    ]);

    hexValues.forEach((hex) => {
      assert.ok(
        documentation.includes(hex),
        `Documentation should list ${hex} for ${key}`
      );
    });
  });
});
