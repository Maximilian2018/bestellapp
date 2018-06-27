import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { card } from 'react-icons-kit/entypo/card'

export default class CardIcon extends Component {
  render() {
    return <Icon size={'30%'} icon={card} style={{ cursor: 'pointer' }} />
  }
}
