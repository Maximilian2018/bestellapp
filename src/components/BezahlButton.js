import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'
import MailIcon from '../Icon/MailIcon'
import CardIcon from '../Icon/Card'

const GridStyle = styled('div')`
  display: grid;
  grid-gap: 10px;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
`
const ToggleBezahlButtonStyle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  color: white;
  border-radius: 20px;
  background: ${props => (props.isSelected ? 'cornflowerblue' : 'gold')};
`

export default class BezahllButton extends Component {
  state = {
    isOrdered: false
  }

  renderBill = () => {
    const currentTable = this.props.state.tables[this.props.state.selectedTable]
    const buttons = this.props.state.buttons
    let sum = 0
    if (currentTable) {
      return (
        <GridStyle>
          {Object.keys(currentTable).map(buttonId => {
            const count = currentTable[buttonId]
            const foundButton = buttons.find(button => button.id === buttonId)
            sum += count * foundButton.price
            return (
              <div key={buttonId}>
                {foundButton.text}: {count} x {foundButton.price.toFixed(2)}
              </div>
            )
          })}
          <div>Zwischensumme: {sum.toFixed(2)}</div>
          <em>19%: {(sum * 0.19).toFixed(2)}</em>
          <br />
          <strong>Gesamt €: {(sum * 1.19).toFixed(2)}</strong>
        </GridStyle>
      )
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Zurück</Link>
        <h3>
          {this.props.title} (#{this.props.state.selectedTable})
        </h3>
        <ToggleBezahlButtonStyle
          onClick={this.props.deleteTable}
          style={{ marginBottom: '2rem' }}
        >
          {' '}
          Bezahlen
        </ToggleBezahlButtonStyle>
        {this.renderBill()}

        <button on click={e => this.setState({ ispayed: true })}>
          <MailIcon /> Rechnung Email
        </button>
        <icon />
        <br />
        <button on click={e => this.setState({ ispayed: false })} />
        <CardIcon />
        <pic />
      </div>
    )
  }
}
