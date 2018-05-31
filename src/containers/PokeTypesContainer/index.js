import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemonTypes } from '../../actions';
import TypeCard from '../../components/TypeCard'

class PokeTypesContainer extends Component {

  componentDidMount() {
    this.props.getPokeTypes('http://localhost:3001/types')
  }

  determineRender = () => {
    if (this.props.isLoading) {
      return <img src='https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif' />
    } else {
      return (
        this.props.types.map(type => <TypeCard {...type} />)
      )
    }
  }

  render() {
    return (
      <div>
        {this.determineRender()}
      </div>
    );
  }
}

PokeTypesContainer.propTypes = {
  getPokeTypes: func.isRequired
};

const mapStateToProps = ({ isLoading, types }) => ({ isLoading, types });
const mapDispatchToProps = dispatch => ({ getPokeTypes:
  (url) => dispatch(fetchPokemonTypes(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokeTypesContainer);
