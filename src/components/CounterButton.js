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
  justify-content: space-between;
  width: 40px;
  height: 100%;
  border: none;
  background: #ddd;
  font-size: 1.3em;
  border-radius: 5px;
`

const CountValue = styled('span')`
  font-weight: bold;
  font-size: 1.1em;
  align-items: center;
  justify-content: space-between;
`

const TextStyle = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  align-items: center;
`

export default class CounterButton extends Component {
  render() {
    const { onDecrease, onIncrease, text, count, price } = this.props

    return (
      <StyledButton active={count > 0}>
        <SideButton onClick={onDecrease}>-</SideButton>
        <TextStyle>
          <span>
            {text} <CountValue>{count > 0 && `(${count})`}</CountValue>
          </span>
          <span>{price && price.toFixed(2)} €</span>
        </TextStyle>
        <SideButton onClick={onIncrease}>+</SideButton>
      </StyledButton>
    )
  }
}
