<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div>
    <h1>Error</h1>
  </div>
</template>
