import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledTableNumber = styled('div')`
  display: inline-block;
  text-align: center;
  height: 75px;
  width: 75px;
  padding: 16px;
  margin: 10px;
  background: grey;
  font-size: 1.6em;
  align-items: space-evenly;
  border-radius: 8px;
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
