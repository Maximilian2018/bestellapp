import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import TableNumber from './TableNumber'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: white;
  background: orange;
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
          <h1>Tischnummer</h1>
        </StyledButton>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              {this.props.tableNumbers.map(tableNumber => (
                <TableNumber tableNumber={tableNumber} key={tableNumber} />
              ))}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}
