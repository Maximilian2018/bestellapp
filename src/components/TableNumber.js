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
  selectTable(tableNo) {
    this.props.toogle()
    this.props.getTableNumber(tableNo)
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
