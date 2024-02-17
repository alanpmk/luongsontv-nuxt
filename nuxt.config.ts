import { createResolver } from "nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  app: {
    head: {
      title: "Phim hay 247",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.8.1/lottie.min.js",
        },
      ],
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "lsc", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    // injectPosition: "first",
    viewer: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
