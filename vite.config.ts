import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const FALLBACK_REPOSITORY_NAME = 'sefosa85';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const repository = process.env.GITHUB_REPOSITORY ?? '';
  const repositoryNameFromEnv = repository.split('/')[1] ?? '';

  const repositoryName =
    repositoryNameFromEnv || (command === 'build' ? FALLBACK_REPOSITORY_NAME : '');

  const isUserOrOrgSite = repositoryName.toLowerCase().endsWith('.github.io');
  const basePath =
    command === 'build' && repositoryName && !isUserOrOrgSite
      ? `/${repositoryName}/`
      : '/';

  return {
    base: basePath,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
