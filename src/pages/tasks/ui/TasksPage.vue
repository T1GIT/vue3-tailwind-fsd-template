<script setup lang="ts">
import { useTasksStore } from '@/entities/task'
import { TasksList } from '@/widgets/tasks-list'

const tasksStore = useTasksStore()
</script>

<template>
  <div class="flex pt-5">
    <TasksList :tasks="tasksStore.tasks" />
  </div>
</template>
