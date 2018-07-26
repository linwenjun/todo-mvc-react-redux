import { combineReducers } from 'redux'
import todos from './todos'
import filters from './filters'

export default combineReducers({
  todos,
  filters
})