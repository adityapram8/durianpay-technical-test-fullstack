<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <h1 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Page not found</h1>
    <p class="text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
  </div>
</template>
