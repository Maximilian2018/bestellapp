import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import TableNumber from './TableNumber'
import styled from 'react-emotion'
import { css } from 'emotion'
import BestellButton from './BestellButton'

const StyledHeader = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: center;
  color: white;
  background: orange;
`

const TableNumberBox = styled('div')`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const ShowTableNumber = styled('div')`
  padding-left: 20px;
  padding-right: 20px;
  background-color: #333;
  color: white;
  font-size: 1.6em;
  border-radius: 5px;
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
