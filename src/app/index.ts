import { createApp } from 'vue'

import { setupPinia } from './lib/setup-pinia'
import { setupRouter } from './lib/setup-router'
import App from './ui/App.vue'
import './styles/index.css'

export function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupPinia(app)

  app.mount('#app')
}
