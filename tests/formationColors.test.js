import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const read = (relativePath) => fs.readFile(path.resolve(process.cwd(), relativePath), 'utf8');

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
