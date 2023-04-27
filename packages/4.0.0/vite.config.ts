import { defineConfig } from "vite";
import DefineOptions from "unplugin-vue-define-options/dist/vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  // ...
  plugins: [UnoCSS(), DefineOptions()],
});
