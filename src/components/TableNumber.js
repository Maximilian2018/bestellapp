import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledTableNumber = styled('div')`
  display: inline-block;
  height: 75px;
  width: 75px;
  padding: 5px;
  margin: 5px;
  background: grey;
  font-size: 1.6em;
`

export default class TableNumber extends Component {
  selectTable = () => {
    this.props.toogle()
    this.props.selectTable(this.props.tableNumber)
  }
  render() {
    return (
      <StyledTableNumber onClick={this.selectTable}>
        {this.props.tableNumber}
      </StyledTableNumber>
    )
  }
}
