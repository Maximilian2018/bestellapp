import React from 'react'
import ToggleButton from './components/ToggleButton'
//import CollapseButton from './components/CollapseButton'
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
        { text: 'Gazpacho', isSelected: false, id: 1 },
        { text: 'Minestrone', isSelected: false, id: 2 },
        { text: 'Vitello Tonnato', isSelected: false, id: 3 },
        { text: 'ZwiebelTarte', isSelected: false, id: 4 },
        { text: 'Salat Sommer', isSelected: false, id: 5 },
        { text: 'Käseplatte', isSelected: false, id: 6 },
        { text: 'Eier Benedikt', isSelected: false, id: 7 },
        { text: 'Carpaccio', isSelected: false, id: 8 }
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
