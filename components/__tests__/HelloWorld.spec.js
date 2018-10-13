import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

test('sanity test', () => {
  expect(true)
})

test('renders a div', () => {
  const msg = 'Hello, World!'
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      message: msg
    }
  });
  expect(wrapper.text()).toContain(msg);
})
