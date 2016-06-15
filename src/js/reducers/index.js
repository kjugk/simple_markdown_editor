import { combineReducers } from 'redux'
import articles from './articles'
import articleForm from './articleForm'
import tag from './tag'
import message from './message'

const rootReducer = combineReducers({
  articles,
  articleForm,
  tag,
  message
})

export default rootReducer
