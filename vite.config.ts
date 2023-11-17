import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "url";
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [vue(), tsconfigPaths()], // https설정시에 넣기 mkcert()
    base: process.env.VITE_BASE_URL,
    assetsInclude: ["**/*.mov"],
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: process.env.VITE_BASE_URL,
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
