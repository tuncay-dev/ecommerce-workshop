// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/supabase', // Uncomment when supabase is setup
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true }
      ]
    }
  },
  devtools: { enabled: true }
})
