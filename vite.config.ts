import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// User/org GitHub Pages site (aiforpeaceworkshop.github.io) serves from root → base "/".
export default defineConfig({
  root: path.resolve(__dirname, "./app"),
  publicDir: path.resolve(__dirname, "./public"),
  cacheDir: path.resolve(__dirname, "./node_modules/.vite"),
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Ensure a single React instance (react-router-dom must share the app's copy)
    dedupe: ["react", "react-dom", "react-router", "react-router-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
