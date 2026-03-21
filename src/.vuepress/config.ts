import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
 import theme from "./theme.js";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  //改为默认中文
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Javaer",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Javaer",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            silenceDeprecations: ["if-function"],
          },
        },
      },
    },
  }),
  
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
