import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemonTypes } from '../../actions';
import { TypeCard } from '../../components/TypeCard'
import './PokeTypesContainer.css'

export class PokeTypesContainer extends Component {

  componentDidMount() {
    this.props.getPokeTypes('http://localhost:3001/types')
  }

  determineRender = () => {
    if (this.props.isLoading) {
      return <img src='https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif' />
    } else if (this.props.hasErrored) {
      return <h2> Oh no, something broke! </h2>
    } else {
      return (
        this.props.types.map(type => <TypeCard {...type} key={type.name}/>)
      )
    }
  }

  render() {
    return (
      <div className='pokeTypesContainer'>
        {this.determineRender()}
      </div>
    );
  }
}

PokeTypesContainer.propTypes = {
  getPokeTypes: func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  types: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired
};

export const mapStateToProps = ({ isLoading, types, hasErrored }) => ({ isLoading, types, hasErrored });
export const mapDispatchToProps = dispatch => ({ getPokeTypes:
  (url) => dispatch(fetchPokemonTypes(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeTypesContainer);
