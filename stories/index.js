import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import 'bootstrap/dist/css/bootstrap.min.css'

import ToggleButton from '../src/components/ToggleButton'
import CollapseButton from '../src/components/CollapseButton'

storiesOf('ToggleButton', module)
  .add('default', () => (
    <ToggleButton text={'Hallo Max viel Spaß mit deiner App (-:'} />
  ))
  .add('selected', () => (
    <ToggleButton
      text={'Hallo Max viel Spaß mit deiner App (-:'}
      isSelected={true}
    />
  ))

storiesOf('CollapseButton', module).add('default', () => (
  <CollapseButton tableNumbers={[1, 2, 3]} />
))
