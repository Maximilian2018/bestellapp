import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ToggleButton from '../src/components/ToggleButton'
//import CollapseButton from '../src/components/CollapseButton'

storiesOf('ToggleButton', module)
  .add('with text', () => (
    <ToggleButton text={'Hallo Max viel Spaß mit deiner App (-:'} />
  ))
  .add('selected', () => (
    <ToggleButton
      text={'Hallo Max viel Spaß mit deiner App (-:'}
      isSelected={true}
    />
  ))
