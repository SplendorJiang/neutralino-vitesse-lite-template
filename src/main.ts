import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')

if (typeof window !== 'undefined') {
  if (import.meta.env.DEV) {
    const { accessToken, port } = await import(`${'/'}.tmp/auth_info.json`) || {}
    window.NL_PORT = port
    window.NL_TOKEN = accessToken
    window.NL_ARGS = []
  }
  window.Neutralino.init()
}

