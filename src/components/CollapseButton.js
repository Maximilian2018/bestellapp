import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import TableNumber from './TableNumber'
import styled from 'react-emotion'
import { css } from 'emotion'
import BestellButton from './BestellButton'
import LockIcon from '../Icon/LockIcon'

const StyledHeader = styled('div')`
  display: flex;
  justify-content: auto;
  margin: 5px;
  padding: 5px;
`

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  background: grey;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
`

const TableNumberBox = styled('div')`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const ShowTableNumber = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  background: cornflowerblue;
  border-radius: 10px;
  margin: 5px;
  padding: 9px;
  font-size: 2rem;
`

export default class CollapseButton extends Component {
  state = {
    collapse: false
  }

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  selectTable = tableNum => {
    this.props.onChangeTable(tableNum)
  }

  render() {
    return (
      <div>
        <StyledHeader>
          <StyledButton onClick={this.toggle} style={{ marginBottom: '1rem' }}>
            <h1>Tischnummer</h1>
          </StyledButton>
          <div />

          <LockIcon />

          <icon />

          <ShowTableNumber>{this.props.selectedTable}</ShowTableNumber>
        </StyledHeader>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <TableNumberBox>
                {this.props.tableNumbers.map(tableNumber => (
                  <TableNumber
                    tableNumber={tableNumber}
                    key={tableNumber}
                    toogle={this.toggle}
                    selectTable={this.selectTable}
                    getTableNumber={this.getTableNumber}
                    hasBooking={!!this.props.bookedTables[tableNumber]}
                  />
                ))}
              </TableNumberBox>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}
