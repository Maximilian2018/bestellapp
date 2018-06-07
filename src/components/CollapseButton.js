import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: white;
  background: cornflowerblue;
`

const TableNumber = styled('div')`
  font-size: 1.3em;
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

  render() {
    return (
      <div>
        <StyledButton onClick={this.toggle} style={{ marginBottom: '1rem' }}>
          Tischnummer
        </StyledButton>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              {this.props.tableNumbers.map(tableNumber => (
                <TableNumber>{tableNumber}</TableNumber>
              ))}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}
