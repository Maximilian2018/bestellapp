import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: ${props => (props.isSelected ? 'cornflowerblue' : 'lightgrey')};
`

export default class ToggleButton extends Component {
  render() {
    return (
      <StyledButton
        isSelected={this.props.isSelected}
        onClick={this.props.toggle}
      >
        {this.props.text}
      </StyledButton>
    )
  }
}
