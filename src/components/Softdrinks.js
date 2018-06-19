import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'

export default class Softdrinks extends Component {
  render() {
    return (
      <div>
        <Link to="/">Zurück</Link>
        <h3>{this.props.title}</h3>
        {this.props.buttons.map(button => (
          <ToggleButton
            key={button.id}
            text={button.text}
            price={button.price}
            isSelected={button.isSelected}
            toggle={e => this.props.onToggle(button.id)}
          />
        ))}
      </div>
    )
  }
}
