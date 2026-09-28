import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-27',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: '苍梵界',
      meta: [{ name: 'description', content: '苍梵界 · 原创 D&D 世界的新玩家入口。' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
