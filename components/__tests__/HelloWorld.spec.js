import test from 'ava'

import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

test('sanity test', t => {
  t.pass()
})

test('renders a div', t => {
  const msg = 'Hello, World!'
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      message: msg
    }
  });

  t.true(wrapper.text().includes(msg))
})
