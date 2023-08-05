// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="vitest" />
import path from 'path'
import { fileURLToPath } from 'url'
import StyleLintPlugin from 'vite-plugin-stylelint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
    },
  },
  css: ['assets/styles/index.scss'],
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/i18n', 'nuxt-vitest'],
  i18n: {
    // baseUrl: 'https://my-nuxt-app.com', // TODO: Добавить ссылку
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
      },
    ],
    defaultLocale: 'en',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "assets/styles/additionals/variables/index.scss" as *;
            @use "assets/styles/additionals/mixins/index.scss" as *;
          `,
        },
      },
    },
    plugins: [styleLintConfig, svgIconsConfig],
  },
  alias: {
    '~~': fileURLToPath(new URL('./', import.meta.url)),
    '@@': fileURLToPath(new URL('./', import.meta.url)),
    '~': fileURLToPath(new URL('./src', import.meta.url)),
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    assets: fileURLToPath(new URL('./assets', import.meta.url)),
    public: fileURLToPath(new URL('./public', import.meta.url)),
    shared: fileURLToPath(new URL('./src/shared', import.meta.url)),
    entities: fileURLToPath(new URL('./src/entities', import.meta.url)),
    features: fileURLToPath(new URL('./src/features', import.meta.url)),
    widgets: fileURLToPath(new URL('./src/widgets', import.meta.url)),
    styles: fileURLToPath(new URL('./assets/styles', import.meta.url)),
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
  },
  plugins: ['@/app/plugins/screenVariables', '@/app/plugins/router'],
  dir: {
    plugins: './src/app/plugins',
    layouts: './src/app/layouts',
    pages: './src/pages',
  },
  components: {
    global: false,
    dirs: [
      {
        path: '@/app/entities',
        global: false,
        pathPrefix: false,
      },
      {
        path: '@/app/features',
        global: false,
        pathPrefix: false,
      },
      {
        path: '@/app/shared',
        global: false,
        pathPrefix: false,
      },
      {
        path: '@/app/widgets',
        global: false,
        pathPrefix: false,
      },
    ],
  },
  typescript: {
    strict: true,
  },
  devtools: {
    enabled: true,
  },
})
