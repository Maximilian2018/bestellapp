import React from 'react'
import ToggleButton from './components/ToggleButton'
//import CollapseButton from './components/CollapseButton'
import uid from 'uid'
import styled from 'react-emotion'

const Grid = styled('div')`
  display: grid;
  grid-gap: 10px;
`

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      buttons: [
        { text: 'Gazpacho', isSelected: false, id: uid() },
        { text: 'Minestrone', isSelected: false, id: uid() },
        { text: 'Vitello Tonnato', isSelected: false, id: uid() },
        { text: 'ZwiebelTarte', isSelected: false, id: uid() },
        { text: 'Salat Sommer', isSelected: false, id: uid() },
        { text: 'Käseplatte', isSelected: false, id: uid() },
        { text: 'Eier Benedikt', isSelected: false, id: uid() },
        { text: 'Carpaccio', isSelected: false, id: uid() }
      ]
    }
  }

  toggle(id) {
    const selectedIndex = this.state.buttons.findIndex(
      button => button.id === id
    )

    const selectedItem = this.state.buttons[selectedIndex]

    this.setState({
      buttons: [
        ...this.state.buttons.slice(0, selectedIndex),
        { ...selectedItem, isSelected: !selectedItem.isSelected },
        ...this.state.buttons.slice(selectedIndex + 1)
      ]
    })
  }

  render() {
    return (
      <Grid>
        {this.state.buttons.map(button => (
          <ToggleButton
            key={button.id}
            text={button.text}
            isSelected={button.isSelected}
            toggle={e => this.toggle(button.id)}
          />
        ))}
      </Grid>
    )
  }
}
