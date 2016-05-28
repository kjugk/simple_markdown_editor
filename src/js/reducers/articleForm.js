import {
  INIT_FORM_COMPLETE, CHANGE_BODY, SUBMIT_COMPLETE, CLEAR_FORM, ADD_TAG, DELETE_TAG
} from '../actions/ArticleFormActions'

const initialState = {
  id: null,
  body: "",
  tags: [],
  isSubmitComplete: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_FORM_COMPLETE:
      return Object.assign({}, state, {
        id: action.article.id,
        body: action.article.body,
        tags: action.article.tags || []
      })

    case CHANGE_BODY:
      return Object.assign({}, state, {
        body: action.body
      })

    case ADD_TAG:
      return Object.assign({}, state, {
        tags: [...new Set([...state.tags, action.tag])]
      })

    case DELETE_TAG:
      return Object.assign({}, state, {
        tags: state.tags.filter((t) => {return t !== action.tag})
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
