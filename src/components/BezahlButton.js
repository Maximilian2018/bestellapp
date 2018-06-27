import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'
import MailIcon from '../Icon/MailIcon'
import Googlepay from '../Icon/Googlepay'

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

const PayButtons = styled('div')`
  margin-top: 250px;
  display: flex;
  justify-content: spay-between;
  width: 100%;
`
const TippButtons = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
const Tipp = styled('box')`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  border: 2px solid grey;
  background: ${props => (props.isSelected ? 'blue' : 'cornflowerblue')};
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

          <div>Zwischensumme €: {sum.toFixed(2)}</div>
          <em>Mehrwertsteuer19%: {(sum * 0.19).toFixed(2)}€</em>
          <em>Tipp: 0.5% </em>
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
        <TippButtons>
          <strong>Tipp</strong>
          <Tipp
            style={{ color: this.props.show ? 'blue' : 'red' }}
            onClick={this.props.isSelected}
          >
            5%
          </Tipp>
          <Tipp isSelected={this.props.isSelected} onClick={this.props.onClick}>
            10%
          </Tipp>
          <Tipp isSelected={this.props.isSelected} onClick={this.props.onClick}>
            15%
          </Tipp>
        </TippButtons>
        <PayButtons>
          <button on click={e => this.setState({ ispayed: true })}>
            <MailIcon /> Rechnung Email
          </button>
          <icon />
          <Googlepay />
        </PayButtons>
      </div>
    )
  }
}
