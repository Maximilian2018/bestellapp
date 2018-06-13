import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

export default class DishPage extends Component {
  render() {
    return (
      <div>
        <Link to="/">Zurück</Link>
        <h3>{this.props.title}</h3>
        {this.props.buttons.map(button => (
          <ToggleButton
            key={button.id}
            text={button.text}
            isSelected={button.isSelected}
            toggle={e => this.props.onToggle(button.id)}
          />
        ))}
      </div>
    )
  }
}
