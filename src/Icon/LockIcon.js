import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { unlock } from 'react-icons-kit/ikons/unlock'

export default class LockIcon extends Component {
  render() {
    return <Icon size={'70%'} icon={unlock} style={{ cursor: 'pointer' }} />
  }
}
