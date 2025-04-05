<script setup lang="ts">
import type { TaskDto } from '@/entities/task'
import { TaskInfo } from '@/entities/task'
import { AddTaskButton } from '@/features/add-task'

const props = defineProps<{
  tasks: TaskDto[]
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <AddTaskButton />

    <TaskInfo v-for="task of props.tasks" :key="task.id" :task />
  </div>
</template>
