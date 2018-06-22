import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'
import CollapseButton from './CollapseButton'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background: green;
  padding: 20px 20px;
  width: 90%;
  margin: 0 auto;
  border-radius: 8px;
`
const StyledArea = styled('textarea')`
  display: block;
  width: 90%;
  margin: 40px auto;
  height: 30vh;
  border: 1px solid grey;
  border-radius: 8px;
`

export default class BestellButton extends Component {
  state = {
    isOrdered: false
  }

  renderBill = () => {
    const currentTable = this.props.state.tables[this.props.state.selectedTable]
    const buttons = this.props.state.buttons
    let sum = 0
    if (currentTable) {
      return (
        <div>
          {Object.keys(currentTable).map(buttonId => {
            const count = currentTable[buttonId]
            const foundButton = buttons.find(button => button.id === buttonId)
            sum += count * foundButton.price
            return (
              <div>
                {foundButton.text}: {count} x {foundButton.price.toFixed(2)}
              </div>
            )
          })}
          <div>Zwischensumme: {sum}</div>
          <em>19%: {(sum * 0.19).toFixed(2)}</em>
          <br />
          <strong>Gesamt €: {(sum * 1.19).toFixed(2)}</strong>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">Zurück</Link>
          <h3>
            {this.props.title} (#{this.props.state.selectedTable})
          </h3>
          <StyledButton onClick={e => this.setState({ isOrdered: true })}>
            Bestellen
          </StyledButton>
        </div>
        {this.renderBill()}
        <div>
          <StyledArea placeholder="Notizen" />
        </div>
        <div />
      </div>
    )
  }
}
