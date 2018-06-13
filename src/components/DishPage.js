import React, { Component } from 'react'
import CounterButton from './CounterButton'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

export default class DishPage extends Component {
  render() {
    return (
      <div>
        <Link to="/">Zurück</Link>
        <h3>{this.props.title}</h3>
        {this.props.buttons.map(button => (
          <CounterButton
            key={button.id}
            text={button.text}
            onIncrease={e => this.props.onIncrease(button.id)}
            onDecrease={e => this.props.onDecrease(button.id)}
            count={button.count}
          />
        ))}
      </div>
    )
  }
}
