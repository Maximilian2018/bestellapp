import React, { Component } from 'react'

export default class ButtonList extends Component {
  render() {
    return (
      <div>
        {this.props.buttons.map(button => (
          <ToggleButton
            key={button.id}
            text={button.text}
            isSelected={button.isSelected}
            toggle={e => store.dispatch(toggleButton(button.id))}
          />
        ))}
      </div>
    )
  }
}
