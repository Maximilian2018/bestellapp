import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'reactstrap'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Menü</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Vorspeisen</DropdownItem>
          <DropdownItem disabled>Hauptgänge</DropdownItem>
          <DropdownItem>Bestseller</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Getränke</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
