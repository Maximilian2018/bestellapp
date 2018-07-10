import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { credit_card } from 'react-icons-kit/ikons/credit_card'

export default class CardIcon extends Component {
  render() {
    return (
      <Icon size={'30%'} icon={credit_card} style={{ cursor: 'pointer' }} />
    )
  }
}
