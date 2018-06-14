import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'
import CollapseButton from './CollapseButton'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background: green;
  padding: 20px 10px;
  width: 90%;
  margin: 0 auto;
`

export default class BestellButton extends Component {
  state = {
    isOrdered: false
  }

  render() {
    return (
      <div>
        <Link to="/">Zurück</Link>
        <h3>{this.props.title}</h3>
        <StyledButton onClick={e => this.setState({ isOrdered: true })}>
          Bestellen
        </StyledButton>
      </div>
    )
  }
}
