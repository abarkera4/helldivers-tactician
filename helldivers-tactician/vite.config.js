import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/<repository-name>/", // Replace <repository-name> with your repository name
  plugins: [react()],
});
