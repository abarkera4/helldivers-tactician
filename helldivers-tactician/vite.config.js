import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/helldivers-tactician/", // Replace <repository-name> with your actual repo name
});
