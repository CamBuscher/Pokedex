import * as actions from './index'

describe('getPokeTypes', () => {
  it('should have a type of GET_POKE_TYPES', () => {
    const pokemonInfo = ['cam likes pokemon', 'squirtle sux']
    const result = actions.getPokeTypes(pokemonInfo)
    const expected = {
      type: 'GET_POKE_TYPES',
      types: pokemonInfo
    }
    expect(result).toEqual(expected)
  })
})

describe('isLoading', () => {
  it('should have a type of IS_LOADING', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = actions.isLoading(true)

    expect(result).toEqual(expected)
  })
})

describe('hasErrored', () => {
  it('should have a type of IS_LOADING', () => {
    const expected = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }

    const result = actions.hasErrored(true)

    expect(result).toEqual(expected)
  })
})

describe('fetchPokemonTypes', () => {
  
})