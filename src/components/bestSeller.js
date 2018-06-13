import React, { Component } from 'react'
import ToggleButton from './ToggleButton'
import { Link } from 'react-router-dom'

/*const StyledDessertButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: white;
  background: orange;
`
*/
export default class bestSeller extends Component {
  render() {
    return (
      <div>
        <Link to="/">Zurück</Link>
        <h3>{this.props.title}</h3>
        {this.props.buttons.map(button => (
          <ToggleButton
            key={button.id}
            text={button.text}
            isSelected={button.isSelected}
            toggle={e => this.props.onToggle(button.id)}
          />
        ))}
      </div>
    )
  }
}
