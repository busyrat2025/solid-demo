import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
import dotenv from "dotenv";

dotenv.config();

const BASE_PATH = (globalThis as any).process?.env?.SERVER_BASE_URL ?? "";

export default defineConfig({
  ssr: false,
  server: {
    baseURL: BASE_PATH,  // 支持子路径，如 /my-project/
    static: true,  // 启用静态模式
    prerender: {
      failOnError: true,
      routes: ["/", '/about'],  // 指定预渲染路由
      crawlLinks: true,  // 自动爬取链接
    },
  },
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      })
    ]
  },
});
