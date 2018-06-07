import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

class Example extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {
    return (
      <div>
        <Button
          justify-content="left"
          height="25px"
          display="flex"
          color="orange"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          Tischnummer
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              Hier befinden sich bald die Tischnummern für die Auswahl der
              Tische , für die Zuordnung der Bestellung!!!
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}
