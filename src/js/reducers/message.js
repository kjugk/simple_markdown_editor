import {SUBMIT_COMPLETE} from '../actions/ArticleFormActions'
import {DELETE_ARTICLE} from '../actions/ArticleActions'
import {HIDE_MESSAGE} from '../actions/MessageActions'

const initialState = {
  message: "",
  show: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_COMPLETE:
    case DELETE_ARTICLE:
      return Object.assign({}, state, {
        message: action.message,
        show: true
      })

    case HIDE_MESSAGE:
      return Object.assign({}, state, {
        message: "",
        show: false
      })

    default:
      return state
  }
}
