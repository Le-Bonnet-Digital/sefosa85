import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const repositoryName = repository.split('/')[1] ?? '';
const isUserOrOrgSite = repositoryName.toLowerCase().endsWith('.github.io');
const basePath = repositoryName && !isUserOrOrgSite ? `/${repositoryName}/` : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
