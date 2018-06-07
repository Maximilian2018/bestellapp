import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../src/components/ToggleButton'

storiesOf('ToggleButton', module).add('with text', () => (
  <ToggleButton text={'hello'} />
))
