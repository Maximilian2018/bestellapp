import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledTableNumber = styled('div')`
  display: inline-block;
  height: 75px;
  width: 75px;
  background: grey;
  font-size: 1.6em;
  text-color: black;
`

export default class TableNumber extends Component {
  selectTable(tableNo) {
    console.log(tableNo)
  }
  render() {
    return (
      <StyledTableNumber
        onClick={this.selectTable.bind(this, this.props.tableNumber)}
      >
        {this.props.tableNumber}
      </StyledTableNumber>
    )
  }
}
