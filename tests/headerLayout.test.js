import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const read = (relativePath) => fs.readFile(path.resolve(process.cwd(), relativePath), 'utf8');

const extractClassList = (source, pattern, occurrence = 0) => {
  const matches = [...source.matchAll(pattern)];
  assert.ok(matches.length > occurrence, 'Expected to find matching element');
  return matches[occurrence][1];
};

test('Desktop navigation uses a uniform gap spacing utility', async () => {
  const contents = await read('src/components/Layout/Header.tsx');
  const navClasses = extractClassList(contents, /<nav className=\"([^\"]*)\"/g);

  assert.ok(navClasses.includes('gap-6'), 'Navigation should use gap-6 for consistent spacing');
  assert.equal(navClasses.includes('space-x-8'), false, 'Legacy space-x-8 utility should be removed');
});

test('Main header avoids duplicating the phone CTA', async () => {
  const contents = await read('src/components/Layout/Header.tsx');
  const phoneTriggers = [...contents.matchAll(/onClick={handlePhoneClick}/g)];

  assert.equal(phoneTriggers.length, 1, 'Phone CTA should only exist in the top info bar');
});

test('Desktop quote CTA avoids heavy visual treatments', async () => {
  const contents = await read('src/components/Layout/Header.tsx');
  const devisClasses = extractClassList(
    contents,
    /onClick={handleDevisClick}[\s\S]*?className=\"([^\"]*)\"/g,
    0
  );

  assert.ok(devisClasses.includes('rounded-full'), 'Devis CTA should use rounded-full to align with phone button');
  assert.ok(/px-5|px-4/.test(devisClasses), 'Devis CTA should use compact horizontal padding');
  assert.ok(/py-2/.test(devisClasses), 'Devis CTA should use compact vertical padding');
  assert.equal(/shadow/.test(devisClasses), false, 'Devis CTA should not use drop shadows');
  assert.equal(/translate/.test(devisClasses), false, 'Devis CTA should not shift position on hover');
});
