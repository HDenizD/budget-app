import { mount } from '@vue/test-utils'
import Login from '@/modules/auth/pages/Login.vue'
import { createTestingPinia } from '@pinia/testing'

test.skip('login with correct credentials', async () => {
  // expect(Login).toBeTruthy();
  const wrapper = mount(Login, {
    global: {
      plugins: [createTestingPinia()],
    },
  })

  const loginCredentials = {
    username: 'test@lala.de',
    password: 'test1234',
  }

  const loginButton = wrapper.find('.p-button-success')
  loginButton.trigger('click')


  expect(loginButton).toHaveBeenCalled()
})
