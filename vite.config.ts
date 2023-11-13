import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";
import mkcert from "vite-plugin-mkcert";
console.log(process.env);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths(), mkcert()], // https설정시에 넣기 mkcert()
  base: "http://222.107.124.161:64000", // public
  // base: "http://172.168.10.91:49090", // private
  server: {
    port: 5173,
    proxy: {
      "/api": {
        // target: "http://183.111.175.101:49090",
        target: "http://222.107.124.161:64000", // public
        // target: "http://172.168.10.91:49090", // private
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, `/proxy`),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@scss/_mixin.scss";',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@images",
        replacement: fileURLToPath(
          new URL("./src/assets/images", import.meta.url)
        ),
      },
      {
        find: "@api",
        replacement: fileURLToPath(new URL("./src/api", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@axios",
        replacement: fileURLToPath(new URL("./src/axios", import.meta.url)),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@store",
        replacement: fileURLToPath(new URL("./src/store", import.meta.url)),
      },
      {
        find: "@scss",
        replacement: fileURLToPath(
          new URL("./src/assets/scss", import.meta.url)
        ),
      },
    ],
  },
});
