import Immutable from 'immutable'
import {
  INIT_FORM_COMPLETE, CHANGE_BODY, SUBMIT_COMPLETE, CLEAR_FORM, ADD_TAG, DELETE_TAG
} from '../actions/ArticleFormActions'

const initialState = Immutable.Map({
  id: null,
  body: "",
  tags: Immutable.Set([]),
  isSubmitComplete: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_FORM_COMPLETE:
      return state.merge({
        id: action.article.id,
        body: action.article.body,
        tags: Immutable.Set(action.article.tags)
      })

    case CHANGE_BODY:
      return state.merge({
        body: action.body
      })

    case ADD_TAG:
      return state.merge({
        tags: state.get('tags').add(action.tag)
      })

    case DELETE_TAG:
      return state.merge({
        tags: state.get('tags').filter((t) => {return t !== action.tag})
      })

    case SUBMIT_COMPLETE:
      return state.merge({
        isSubmitComplete: true
      })

    case CLEAR_FORM:
      return initialState

    default:
      return state
  }
}
