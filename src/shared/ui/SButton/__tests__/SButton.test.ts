import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import SButton from '../SButton.vue'

describe('Testing SButton', async () => {
  test('Mounting', () => {
    const button = mount(SButton, {
      props: {
        tag: 'button',
      },
      slots: {
        default: 'Привет',
      },
    })

    expect(button.element).toMatchSnapshot()
  })
})
