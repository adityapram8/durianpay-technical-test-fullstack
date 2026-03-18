<script setup lang="ts">
import { ref } from 'vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 overflow-hidden flex">
    
    <!-- Sidebar -->
    <aside 
      :class="[
        'bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 w-72 flex-shrink-0 flex flex-col transition-all duration-300 z-20',
        { '-ml-72 lg:ml-0': !isSidebarOpen }
      ]"
    >
      <!-- Logo Area -->
      <div class="h-20 flex items-center px-6 border-b border-gray-100 dark:border-slate-700/50">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
            D
          </div>
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">DurianPay</span>
        </div>
      </div>
      
      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
        <div class="px-2 mb-2 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Main</div>
        
        <NuxtLink to="/dashboard" class="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </NuxtLink>
        
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Transactions
        </a>
        
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Customers
        </a>
        
        <div class="px-2 mt-8 mb-2 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider">Settings</div>
        
        <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700/50 hover:text-gray-900 dark:hover:text-white rounded-xl font-medium transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Preferences
        </a>
      </nav>
      
      <!-- User Profile (Bottom of Sidebar) -->
      <div class="p-4 border-t border-gray-100 dark:border-slate-700/50">
        <div class="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
          <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="User Avatar" class="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 dark:text-white truncate">John Doe</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">john@durianpay.id</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content wrapper -->
    <div class="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-gray-50/50 dark:bg-slate-900/50">
      
      <!-- Top header -->
      <header class="h-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-700/80 flex items-center justify-between px-6 z-10 sticky top-0">
        <div class="flex items-center gap-4">
          <button @click="toggleSidebar" class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
             <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <!-- Search -->
          <div class="hidden md:flex relative group">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" class="block w-64 md:w-80 pl-10 pr-3 py-2 border border-gray-200 dark:border-slate-600 rounded-xl leading-5 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm" placeholder="Search transactions, customers...">
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <!-- Notifications -->
          <button class="relative p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-800"></span>
          </button>
          
          <NuxtLink to="/" class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2 transition-colors">
            Logout
          </NuxtLink>
        </div>
      </header>
      
      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
        <slot />
      </main>
      
    </div>
  </div>
</template>

<style>
/* Custom scrollbar for webkit */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.3);
  border-radius: 20px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(71, 85, 105, 0.5);
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.5);
}
</style>
