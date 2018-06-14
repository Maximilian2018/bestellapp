import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: ${props => (props.active ? 'orange' : '#eee')};
  border: 3px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
`

const SideButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  border: none;
  background: #ddd;
  font-size: 1.3em;
`

const CountValue = styled('span')`
  font-weight: bold;
  font-size: 1.1em;
`

export default class CounterButton extends Component {
  render() {
    const { onDecrease, onIncrease, text, count } = this.props

    return (
      <StyledButton active={count > 0}>
        <SideButton onClick={onDecrease}>-</SideButton>
        <span>
          {text} <CountValue>{count > 0 && `(${count})`}</CountValue>
        </span>
        <SideButton onClick={onIncrease}>+</SideButton>
      </StyledButton>
    )
  }
}
