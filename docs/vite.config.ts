import path from "path";
import Inspect from "vite-plugin-inspect";
import { defineConfig, loadEnv } from "vite";
import DefineOptions from "unplugin-vue-define-options/vite";
import UnoCSS from "unocss/vite";
import mkcert from "vite-plugin-mkcert";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { resolve } from "path";

const projRoot = resolve(__dirname, "..", "..", "..");

import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";

import type { Alias } from "vite";

const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`,
  },
];

export default defineConfig(async ({ mode }): Promise<any> => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      vueJsx(),
      DefineOptions(),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: [".vitepress/vitepress/components"],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),
      UnoCSS(),
      MarkdownTransform(),
      Inspect(),
      mkcert(),
    ],
    optimizeDeps: {},
  };
});
