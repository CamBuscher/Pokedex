import React from 'react';
import './TypeCard.css';

export const TypeCard = (props) => {
  return (
    <div className='typeCard'>
      <h3>{props.name}</h3>
    </div>
  )
}