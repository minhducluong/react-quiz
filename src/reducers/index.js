import { combineReducers } from 'redux'
import currentReducer from './currentSlice'
import questionsReducer from './questionsSlice'

export default combineReducers({
  current: currentReducer,
  questions: questionsReducer
})