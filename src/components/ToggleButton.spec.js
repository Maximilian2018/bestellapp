import React from 'react'
import ToggleButton from './ToggleButton'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('ToggleButton', () => {
  let wrapper
  let mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = mount(
      <ToggleButton isSelected={false} toggle={mockFunction} text={'foo'} />
    )
  })

  it('renders a ToggleButton', () => {
    expect(wrapper.html()).toContain('foo')
  })

  it('reacts on a click', () => {
    expect(mockFunction.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockFunction.mock.calls.length).toBe(1)
  })

  it('changes the color', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.setProps({ isSelected: true })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
