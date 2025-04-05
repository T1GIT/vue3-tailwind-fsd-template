import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

import App from './App.vue'

describe('app', () => {
  let wrapper: VueWrapper<InstanceType<typeof App>>

  beforeEach(async () => {
    wrapper = shallowMount(App)
  })

  it('should be mounted', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
