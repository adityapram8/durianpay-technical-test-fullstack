import { mount } from '@vue/test-utils'
import App from '@/app.vue'

describe('App', () => {
  const mountWithStubs = () =>
    mount(App, {
      global: {
        stubs: {
          NuxtRouteAnnouncer: true,
          NuxtWelcome: true,
          // NuxtPage is used by the default Nuxt App component to render pages.
          // Stubbing it lets us assert the presence of NuxtWelcome without needing Nuxt's routing layer.
          NuxtPage: {
            template: '<NuxtWelcome />',
          },
        },
      },
    })

  it('mounts successfully', () => {
    const wrapper = mountWithStubs()
    expect(wrapper.exists()).toBe(true)
  })

  it('renders NuxtWelcome component', () => {
    const wrapper = mountWithStubs()
    expect(wrapper.findComponent({ name: 'NuxtWelcome' }).exists()).toBe(true)
  })
})
