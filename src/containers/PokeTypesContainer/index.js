import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemonTypes } from '../../actions';
class PokeTypesContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.getPokeTypes('http://localhost:3001/types')
  }

  render() {
    return (
      <div>
        
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
