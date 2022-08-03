import { mount, VueWrapper } from '@vue/test-utils'
import Dashboard from '@/pages/Dashboard.vue'
import UserHasNoData from '@/modules/dashboard/components/UserHasNoData.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUser } from '@/stores'

describe('Dashboard.vue Tests', () => {
  let wrapper: VueWrapper

  it('shows expense wizard card if "user has no data"', async () => {
    wrapper = mount(Dashboard, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const userStore = useUser()

    expect(
      !userStore.expensesWizardWasSkipped && userStore.userHasNoExpenses
    ).toBe(true)
    expect(wrapper.getComponent(UserHasNoData)).toBeTruthy()
  })
})
