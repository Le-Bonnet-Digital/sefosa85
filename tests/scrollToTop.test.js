import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const resolvePath = (relativePath) => path.resolve(process.cwd(), relativePath);

const scrollModulePromise = (async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'scroll-logic-'));
  const outfile = path.join(tempDir, 'scroll.cjs');

  await build({
    entryPoints: [resolvePath('src/utils/scroll.ts')],
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: ['node18'],
    outfile,
    sourcemap: false,
    loader: { '.ts': 'ts' },
    define: { 'process.env.NODE_ENV': '"test"' }
  });

  return import(pathToFileURL(outfile).href);
})();

const location = (pathname, { hash = '', search = '' } = {}) => ({ pathname, hash, search });

test('should not scroll when there is no previous location', async () => {
  const { shouldScrollToTop } = await scrollModulePromise;
  const result = shouldScrollToTop(null, location('/formations/secourisme/sst'));
  assert.equal(result, false);
});

test('should request scroll when pathname changes without hash', async () => {
  const { shouldScrollToTop } = await scrollModulePromise;
  const prev = location('/');
  const next = location('/formations/secourisme/sst');
  const result = shouldScrollToTop(prev, next);
  assert.equal(result, true);
});

test('should not scroll when navigating to a hash anchor', async () => {
  const { shouldScrollToTop } = await scrollModulePromise;
  const prev = location('/');
  const next = location('/formations/secourisme/sst', { hash: '#programme' });
  const result = shouldScrollToTop(prev, next);
  assert.equal(result, false);
});

test('should request scroll when search parameters change', async () => {
  const { shouldScrollToTop } = await scrollModulePromise;
  const prev = location('/formations?from=homepage', { search: '?from=homepage' });
  const next = location('/formations?from=cta', { search: '?from=cta' });
  const result = shouldScrollToTop(prev, next);
  assert.equal(result, true);
});

test('scrollToTop should use provided scroll function', async () => {
  const { scrollToTop } = await scrollModulePromise;
  const calls = [];
  const invoked = scrollToTop((options) => {
    calls.push(options);
  });

  assert.equal(invoked, true);
  assert.deepEqual(calls, [
    { top: 0, left: 0, behavior: 'smooth' }
  ]);
});

test('scrollToTop should use window.scrollTo when available', async () => {
  const { scrollToTop } = await scrollModulePromise;
  const originalWindow = globalThis.window;
  const calls = [];

  globalThis.window = {
    ...(originalWindow ?? {}),
    scrollTo: (options) => {
      calls.push(options);
    }
  };

  try {
    const invoked = scrollToTop();
    assert.equal(invoked, true);
    assert.deepEqual(calls, [
      { top: 0, left: 0, behavior: 'smooth' }
    ]);
  } finally {
    if (originalWindow === undefined) {
      delete globalThis.window;
    } else {
      globalThis.window = originalWindow;
    }
  }
});

test('scrollToTop should return false when no window is available', async () => {
  const { scrollToTop } = await scrollModulePromise;
  if ('window' in globalThis) {
    const originalWindow = globalThis.window;
    try {
      delete globalThis.window;
    } catch {}
    const result = scrollToTop();
    assert.equal(result, false);
    globalThis.window = originalWindow;
  } else {
    const result = scrollToTop();
    assert.equal(result, false);
  }
});
