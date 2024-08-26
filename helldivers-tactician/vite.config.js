import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure this is correct
  build: {
    outDir: "dist", // Ensure the output directory is correctly set
  },
});
