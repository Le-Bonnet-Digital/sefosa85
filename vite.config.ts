import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const FALLBACK_REPOSITORY_NAME = 'sefosa85';
const BASE_PATH_ENV_KEYS = ['GITHUB_PAGES_BASE_PATH', 'BASE_PATH', 'VITE_BASE_PATH'] as const;

const normalizeBasePath = (value: string): string => {
  const trimmed = value.trim().replace(/^\/+|\/+$/g, '');

  return trimmed ? `/${trimmed}/` : '/';
};

const resolveExplicitBasePath = (): string => {
  for (const key of BASE_PATH_ENV_KEYS) {
    const envValue = process.env[key];

    if (envValue) {
      return normalizeBasePath(envValue);
    }
  }

  return '';
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const repository = process.env.GITHUB_REPOSITORY ?? '';
  const repositoryNameFromEnv = repository.split('/')[1] ?? '';
  const repositoryName =
    repositoryNameFromEnv || (command === 'build' ? FALLBACK_REPOSITORY_NAME : '');

  const explicitBasePath = resolveExplicitBasePath();
  const isUserOrOrgSite = repositoryNameFromEnv.toLowerCase().endsWith('.github.io');
  const effectiveRepositoryName =
    isUserOrOrgSite && command === 'build'
      ? FALLBACK_REPOSITORY_NAME
      : repositoryName || FALLBACK_REPOSITORY_NAME;

  const basePath =
    explicitBasePath ||
    (command === 'build' ? normalizeBasePath(effectiveRepositoryName) : '/');

  return {
    base: basePath,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
