// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './',
  
  // TAMBAHKAN BLOK INI:
  app: {
    baseURL: '/slr/' // Memaksa Nuxt membaca aset dari arva-as.my.id/slr/
  }
})