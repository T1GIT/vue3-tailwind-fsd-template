<script setup lang="ts">
import { useTasksStore } from '@/entities/task'

const tasksStore = useTasksStore()

function add(): void {
  const id = tasksStore.tasks.length + 1
  tasksStore.add({ id, title: `Task ${id}` })
}
</script>

<template>
  <button @click="add">
    <i class="bi-plus" />
  </button>
</template>
