import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchSpecificPokemon } from '../../actions';
import './TypeCard.css';

class TypeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: []
    }
  }

  fetchPokemon = () => {
    this.props.fetchSpecificPokemon(this.props.pokemon, this.props.name)
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
    const pokemonToRender = this.props.allPokemon.filter(pokemon => pokemon.type === this.props.name)
    
    return pokemonToRender.map(pokemon => (
      <div key={pokemon.id}>
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

TypeCard.propTypes = {
  pokemon: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export const mapStateToProps = ({ allPokemon }) => ({ allPokemon });
export const mapDispatchToProps = dispatch => ({
  fetchSpecificPokemon:
    (pokemon, type) => dispatch(fetchSpecificPokemon(pokemon, type))
});
export default connect(mapStateToProps, mapDispatchToProps)(TypeCard);