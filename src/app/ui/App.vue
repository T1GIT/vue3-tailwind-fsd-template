<script lang="ts" setup></script>

<template>
  <div class="relative size-full overflow-auto">
    <RouterView class="size-full" data-testid="app-root" @contextmenu.prevent.stop />
  </div>
</template>
