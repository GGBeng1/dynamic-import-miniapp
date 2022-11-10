import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import vueJsx from "@vitejs/plugin-vue2-jsx";
import dynamicImport from "vite-plugin-dynamic-import";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.join(process.cwd(), "src") },
      {
        find: /* ~/ */ /^~(?=\/)/,
        replacement: path.join(process.cwd(), "node_modules"),
      },
      {
        find: /* ~ */ /^~(?!\/)/,
        replacement: path.join(process.cwd(), "node_modules/"),
      },
    ],
  },
  plugins: [vue(), vueJsx(), dynamicImport()],
});
