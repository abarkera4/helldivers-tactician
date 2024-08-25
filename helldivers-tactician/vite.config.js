import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "", // Ensure base is empty or set to '/' to avoid path issues
});
