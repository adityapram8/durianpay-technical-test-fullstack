<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  })

  const onSubmit = () => {
    // navigateTo('/dashboard')
  }
</script>

<template>
  <div class="flex h-screen w-full items-center justify-center transition-colors duration-300">
    <div
      class="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/50"
    >
      <div class="mb-10 text-center">x</div>

      <form @submit.prevent="" class="space-y-6">
        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Email</label
          >
          <input
            type="email"
            placeholder="you@example.com"
            class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Password</label
          >
          <input
            type="password"
            placeholder="••••••••"
            class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
          />
        </div>

        <div class="flex items-center justify-between">
          <label class="flex cursor-pointer items-center space-x-2">
            <input
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700"
            />
            <span class="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
          </label>
          <a
            href="#"
            class="text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >Forgot password?</a
          >
        </div>

        <button
          type="button"
          @click="onSubmit"
          class="w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>
