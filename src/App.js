import React from 'react'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { toggleButton } from './actions'

import ToggleButton from './components/ToggleButton'
//import CollapseButton from './components/CollapseButton'
import styled from 'react-emotion'

const Grid = styled('div')`
  display: grid;
  grid-gap: 10px;
`

const store = createStore(reducer, initialState)

export default class Example extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    return (
      <Grid>
        {state.buttons.map(button => (
          <ToggleButton
            key={button.id}
            text={button.text}
            isSelected={button.isSelected}
            toggle={e => store.dispatch(toggleButton(button.id))}
          />
        ))}
      </Grid>
    )
  }
}
