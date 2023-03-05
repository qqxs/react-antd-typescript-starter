import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        /**
         * 1.以对象的方式使用
         * 将 lodash 模块打包成一个 chunk，名称是 lodash
         */
        manualChunks: {
          dll: ["react", "react-dom", "react-router-dom", "axios"]
        }
      }
    }
  },

  plugins: [react()]
});
