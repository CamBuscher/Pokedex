export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      const includedPokemon = state.map(pokemon => pokemon.id)
      if (!includedPokemon.includes(action.pokemon.id)) {
        return [...state, action.pokemon]
      } else {
        return state
      }
    default:
      return state;
  }
};