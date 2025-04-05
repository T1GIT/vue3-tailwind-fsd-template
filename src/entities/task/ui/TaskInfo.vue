<script setup lang="ts">
import type { TaskDto } from '../dto/task'

const props = defineProps<{
  task: TaskDto
}>()
</script>

<template>
  <div>{{ props.task.title }}</div>
</template>
