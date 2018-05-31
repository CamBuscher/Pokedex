import { combineReducers } from 'redux'
import typesReducer from './types-reducer'
import { hasErroredReducer, isLoadingReducer } from './logistics-reducers'

const rootReducer = combineReducers({
  types: typesReducer,
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer
})

export default rootReducer
