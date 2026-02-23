import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Pastikan ada baris ini

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tambahkan ini di dalam array plugins
  ],
});
