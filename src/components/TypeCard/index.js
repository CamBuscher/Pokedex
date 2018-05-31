import React, { Component } from 'react';
import './TypeCard.css';

export class TypeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      showPokemon: false
    }
  }

  fetchPokemon = () => {
    this.setState({showPokemon: true})

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
    if (this.state.showPokemon) {
      return this.state.pokemon.map(pokemon => (
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.weight}</p>
          <img className='pokeImg' src={pokemon.sprites.front_default} />
        </div>
      ))
    }
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