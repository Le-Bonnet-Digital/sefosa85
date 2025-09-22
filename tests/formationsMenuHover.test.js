import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const read = (relativePath) => fs.readFile(path.resolve(process.cwd(), relativePath), 'utf8');

const clearTimeoutPattern = /clearTimeout\s*\(/;
const delayedClosePattern = /setTimeout\s*\(\s*\(\)\s*=>\s*\{?[\s\S]*?setIsFormationsOpen\(false\)/;

const sharedHoverHandlerPattern = /onMouse(Enter|Leave)={handleFormationsMouse(Enter|Leave)}/g;

test('Desktop formations menu uses a hover delay to stay interactive', async () => {
  const contents = await read('src/components/Layout/Header.tsx');

  assert.ok(
    delayedClosePattern.test(contents),
    'Formations dropdown should close via a delayed timeout instead of immediately'
  );

  assert.ok(
    clearTimeoutPattern.test(contents),
    'Formations dropdown should cancel any pending timeout when the pointer returns'
  );

  const matches = contents.match(sharedHoverHandlerPattern) ?? [];
  assert.ok(
    matches.length >= 2,
    'Formations trigger and panel should share the same hover handlers to keep the menu open'
  );
});
