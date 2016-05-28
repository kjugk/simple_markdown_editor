import {SELECT_TAG, TOGGLE_DRAWER} from '../actions/TagActions'
import {SUBMIT_COMPLETE} from '../actions/ArticleFormActions'

const initialState = {
  selectedTag: "",
  isDrawerOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAG:
      return Object.assign({}, state, {
        selectedTag: action.tag
      })

    case SUBMIT_COMPLETE:
      return Object.assign({}, state, {
        selectedTag: ""
      })

    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        isDrawerOpen: !state.isDrawerOpen
      })

    default:
      return state
  }
}
