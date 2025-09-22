import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? process.env.VITE_BASE_PATH || "/" : "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
}));
