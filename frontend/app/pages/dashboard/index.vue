<script setup lang="ts">
  definePageMeta({
    layout: 'dashboard',
    middleware: 'auth',
  })
</script>

<template>
  <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div class="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
        <p class="mt-1 text-gray-500 dark:text-gray-400">
          Welcome back, here's what's happening today.
        </p>
      </div>

      <button
        class="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Add Widget</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="i in 4"
        :key="i"
        class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
      >
        <div class="mb-4 flex items-center justify-between">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <span
            class="rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
            >+12.5%</span
          >
        </div>
        <h3 class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">$45,231.89</p>
      </div>
    </div>

    <!-- Charts Area -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div
        class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2 dark:border-slate-700 dark:bg-slate-800"
      >
        <h3 class="mb-4 text-lg font-bold text-gray-900 dark:text-white">Activity Overview</h3>
        <div
          class="flex h-72 w-full items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-600 dark:bg-slate-700/50"
        >
          Chart Placeholder
        </div>
      </div>

      <div
        class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <h3 class="mb-4 text-lg font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
        <div class="space-y-4">
          <div
            v-for="i in 5"
            :key="i"
            class="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50 dark:hover:bg-slate-700/50"
          >
            <div class="flex items-center space-x-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
              >
                TX
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Payment Received</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
            </div>
            <span class="text-sm font-bold text-gray-900 dark:text-white">+$250.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
