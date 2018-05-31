import React, { Component } from 'react';
import './App.css';
import PokeTypesContainer from '../../containers/PokeTypesContainer/'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokeTypesContainer />
      </div>
    );
  }
}


export default App;
