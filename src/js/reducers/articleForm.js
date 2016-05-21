import {
  INIT_FORM_COMPLETE, CHANGE_BODY, SUBMIT_COMPLETE, CLEAR_FORM
} from '../actions/ArticleFormActions'

const initialState = {
  id: null,
  body: "",
  isSubmitComplete: false
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case INIT_FORM_COMPLETE:
      return Object.assign({}, state, {
        id: action.article.id,
        body: action.article.body
      })

    case CHANGE_BODY:
      return Object.assign({}, state, {
        body: action.body
      })

    case SUBMIT_COMPLETE:
      return Object.assign({}, state, {
        isSubmitComplete: true
      })

    case CLEAR_FORM:
      return initialState

    default:
      return state
  }
}
