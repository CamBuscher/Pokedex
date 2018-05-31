export const getPokeTypes = pokemonInfo => ({
  type: 'GET_POKE_TYPES',
  types: pokemonInfo
})

export const isLoading = boolean => ({
  type: 'IS_LOADING',
  isLoading: boolean
})

export const hasErrored = boolean => ({
  type: 'HAS_ERRORED',
  hasErrored: boolean
})

export const addPokemon = pokemon => ({
  type: 'ADD_POKEMON',
  pokemon
})

export const fetchPokemonTypes = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          dispatch(hasErrored(true))
          throw Error('Oh dang')
        }
        dispatch(isLoading(false))
        return response
      })
      .then(response => response.json())
      .then(pokeData => dispatch(getPokeTypes(pokeData)))
  }
}

export const fetchSpecificPokemon = (pokemon, type) => {
  return dispatch => {
    pokemon.map(pokemONE => {
      return fetch(`http://localhost:3001/pokemon/${pokemONE}`)
        .then(response => response.json())
        .then(data => {
          console.log({...data, type})
          dispatch(addPokemon({...data, type}))
        })
    })
  }
}