import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const read = (relativePath) => fs.readFile(path.resolve(process.cwd(), relativePath), 'utf8');

const independentTrainerPattern = /formateur indépendant/i;

const organismWording = /organisme de formation/i;

test('Home page copy highlights the independent trainer status', async () => {
  const contents = await read('src/pages/HomePage.tsx');
  assert.match(contents, independentTrainerPattern);
});

test('About page hero text reflects the independent trainer status', async () => {
  const contents = await read('src/pages/AProposPage.tsx');
  assert.match(contents, independentTrainerPattern);
});

test('Structured data defaults describe SEFOSA as an independent trainer', async () => {
  const contents = await read('src/components/SEO/StructuredData.tsx');
  assert.match(contents, independentTrainerPattern);
});

test('Legacy "organisme de formation" wording is removed from key pages', async () => {
  const [home, about, structured] = await Promise.all([
    read('src/pages/HomePage.tsx'),
    read('src/pages/AProposPage.tsx'),
    read('src/components/SEO/StructuredData.tsx')
  ]);

  assert.equal(organismWording.test(home), false);
  assert.equal(organismWording.test(about), false);
  assert.equal(organismWording.test(structured), false);
});

