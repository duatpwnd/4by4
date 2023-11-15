import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";
import mkcert from "vite-plugin-mkcert";
console.log(loadEnv);
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [vue(), tsconfigPaths()], // https설정시에 넣기 mkcert()
    // base: "http://222.107.124.161:64000", // public
    base: process.env.VITE_BASE_URL, // private
    assetsInclude: ["**/*.mov"],
    server: {
      port: 5173,
      proxy: {
        "/api": {
          // target: "http://183.111.175.101:49090",
          // target: "http://222.107.124.161:64000", // public
          target: process.env.VITE_BASE_URL, // private
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ``),
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
};
