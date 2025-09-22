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

test('Desktop phone action keeps a neutral emphasis', async () => {
  const contents = await read('src/components/Layout/Header.tsx');
  const phoneClasses = extractClassList(
    contents,
    /onClick={handlePhoneClick}[\s\S]*?className=\"([^\"]*)\"/g,
    1
  );

  assert.ok(/\btext-gray-700\b/.test(phoneClasses), 'Phone button should use a neutral text-gray-700 color');
  assert.equal(/(^|\s)text-blue-600(\s|$)/.test(phoneClasses), false, 'Phone button should no longer use text-blue-600 base color');
  assert.ok(phoneClasses.includes('rounded-full'), 'Phone button should have rounded-full shape for harmony');
  assert.ok(phoneClasses.includes('border'), 'Phone button should include a subtle border');
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
