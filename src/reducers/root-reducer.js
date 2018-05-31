import { combineReducers } from 'redux'
import typesReducer from './types-reducer'
import { pokemonReducer } from './pokemon-reducer'
import { hasErroredReducer, isLoadingReducer } from './logistics-reducers'

const rootReducer = combineReducers({
  types: typesReducer,
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer,
  allPokemon: pokemonReducer
})

export default rootReducer
