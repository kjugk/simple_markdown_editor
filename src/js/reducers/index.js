import { combineReducers } from 'redux'
import articles from './articles'
import articleForm from './articleForm'
import tag from './tag'

const rootReducer = combineReducers({
  articles,
  articleForm,
  tag
})

export default rootReducer
