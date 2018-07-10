import React, { Component } from 'react'
import { euro } from 'react-icons-kit/fa/euro'
import { Icon } from 'react-icons-kit'

export default class EuroIcon extends Component {
  render() {
    return <Icon size={'50%'} icon={euro} style={{ cursor: 'pointer' }} />
  }
}
