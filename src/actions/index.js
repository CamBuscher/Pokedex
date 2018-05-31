export const fakeAction = () => ({ type: 'FAKE'})

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

export const fetchPokemonTypes = url => {
  return dispatch => {
    dispatch(isLoading(true))
  }
}