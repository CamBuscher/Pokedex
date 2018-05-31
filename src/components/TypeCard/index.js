import React, { Component } from 'react';
import './TypeCard.css';

export class TypeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: []
    }
  }

  fetchPokemon = () => {
    if (!this.state.pokemon.length) {
      this.props.pokemon.map(pokemONE => {
        return fetch(`http://localhost:3001/pokemon/${pokemONE}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              pokemon: [...this.state.pokemon, data]
            })
          })
      })
    }
  }

  renderPokemon = () => {
    return this.state.pokemon.map(pokemon => (
      <div>
        <p>Name: {pokemon.name}</p>
        <p>Weight: {pokemon.weight}</p>
        <img className='pokeImg' src={pokemon.sprites.front_default} />
      </div>
    ))
  }
  
  render() {
    return (
      <div className='typeCard' onClick={this.fetchPokemon}>
        <h3>{this.props.name}</h3>
        {this.renderPokemon()}
      </div>
    )
  }
}