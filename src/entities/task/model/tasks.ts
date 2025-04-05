import { defineStore } from 'pinia'
import { shallowReadonly, shallowRef } from 'vue'

import type { TaskDto } from '../dto/task'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = shallowRef<TaskDto[]>([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ])

  function add(task: TaskDto) {
    tasks.value = [...tasks.value, task]
  }

  return {
    tasks: shallowReadonly(tasks),

    add,
  }
})
