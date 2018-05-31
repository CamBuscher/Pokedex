import React, { Component } from 'react';
import './TypeCard.css';

export class TypeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: []
    }
  }
  
  render() {
    return (
      <div className='typeCard'>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}