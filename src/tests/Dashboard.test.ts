import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import Dashboard from '@/pages/Dashboard.vue'
import UserHasNoData from '@/modules/dashboard/components/UserHasNoData.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUser } from '@/stores'

describe('Dashboard.vue Tests', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(Dashboard, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })

  it('shows expense wizard card if "user has no data"', async () => {
    const userStore = useUser()

    expect(userStore.userHasNoExpenses).toBe(true)
    expect(wrapper.findComponent(UserHasNoData)).toBeTruthy()
  })

  //-------------------------------------------------------------

  it('does not show expense wizard card if "user has data"', async () => {
    const userStore = useUser()

    userStore.userHasNoExpenses = false

    await flushPromises()

    expect(userStore.userHasNoExpenses).toBe(false)
    expect(wrapper.findComponent(UserHasNoData).exists()).toBe(false)
  })
})
