import type { RouteRecordRaw } from 'vue-router'

import { RoutePath } from '@/shared/const'

export const tasksRoute: RouteRecordRaw = {
  path: RoutePath.TASKS,
  component: () => import('../ui/TasksPage.vue'),
}
