// Mock Nuxt auto-imports for Jest
// Add more mocks here as needed when you use Nuxt composables in tests

import { ref, computed, reactive, watch, onMounted, onUnmounted } from "vue";

// Re-export Vue reactivity APIs that Nuxt auto-imports
export {
  ref,
  computed,
  reactive,
  watch,
  onMounted,
  onUnmounted,
};

// Mock Nuxt-specific composables
export const useRuntimeConfig = () => ({
  public: {},
});

export const useRoute = () => ({
  params: {},
  query: {},
  path: "/",
  name: "",
  fullPath: "/",
});

export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  go: jest.fn(),
});

export const useFetch = jest.fn(() => ({
  data: ref(null),
  pending: ref(false),
  error: ref(null),
  refresh: jest.fn(),
}));

export const useAsyncData = jest.fn(() => ({
  data: ref(null),
  pending: ref(false),
  error: ref(null),
  refresh: jest.fn(),
}));

export const navigateTo = jest.fn();

export const definePageMeta = jest.fn();
