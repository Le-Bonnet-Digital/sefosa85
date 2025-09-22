import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const resolvePath = (relativePath) => path.resolve(process.cwd(), relativePath);

async function buildFixture() {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'sstpage-test-'));
  const outfile = path.join(tempDir, 'renderSSTPage.cjs');

  await build({
    entryPoints: [resolvePath('tests/renderSSTPage.tsx')],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: ['node18'],
    outfile,
    jsx: 'automatic',
    sourcemap: false,
    loader: { '.ts': 'ts', '.tsx': 'tsx' },
    define: { 'process.env.NODE_ENV': '"test"' }
  });

  return pathToFileURL(outfile).href;
}

test('SSTPage renders without runtime errors when viewing details', async () => {
  const moduleUrl = await buildFixture();
  const mod = await import(moduleUrl);
  const render = mod.renderSSTPage ?? mod.default;

  assert.ok(typeof render === 'function', 'render function should be available');

  assert.doesNotThrow(() => {
    render();
  });
});
