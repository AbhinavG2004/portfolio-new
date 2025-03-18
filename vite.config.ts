import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path"; // Fix for ESM import
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Allows access from all network interfaces
    port: 3000, // Change this to 5173 if needed
  },
  plugins: [
    react(),
    mode === "development" ? componentTagger() : null, // Ensuring it only runs in development
  ].filter(Boolean), // Removes 'null' values from the array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensures shorter import paths
    },
  },
}));
