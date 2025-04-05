import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { tasksRoute } from '@/pages/tasks'
import { RoutePath } from '@/shared/const'

const routes: RouteRecordRaw[] = [
  { path: RoutePath.ROOT, redirect: tasksRoute },
  tasksRoute,
]

export function setupRouter(app: App): void {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  app.use(router)
}
