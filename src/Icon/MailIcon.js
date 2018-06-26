import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { envelopeO } from 'react-icons-kit/fa/envelopeO'

export default class MailIcon extends Component {
  render() {
    return <Icon size={'30%'} icon={envelopeO} style={{ cursor: 'pointer' }} />
  }
}
