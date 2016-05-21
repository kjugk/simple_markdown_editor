import { combineReducers } from 'redux'
import articles from './articles'
import articleForm from './articleForm'

const rootReducer = combineReducers({
  articles,
  articleForm
})

export default rootReducer
