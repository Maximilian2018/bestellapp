import React from 'react'
import ToggleButton from './components/ToggleButton'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      buttons: [
        { text: 'Gaspaccio', isSelected: false, id: 1 },
        { text: 'Salat', isSelected: false, id: 2 }
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
      <div>
        {this.state.buttons.map(button => (
          <ToggleButton
            text={button.text}
            isSelected={button.isSelected}
            toggle={e => this.toggle(button.id)}
          />
        ))}
      </div>
    )
  }
}
