import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/sefosa85/" : "/", // 👈 Prod = /sefosa85/, Dev = /
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
}));
