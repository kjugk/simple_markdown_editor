import Immutable from 'immutable'
import {SELECT_TAG, TOGGLE_DRAWER} from '../actions/TagActions'
import {SUBMIT_COMPLETE} from '../actions/ArticleFormActions'

const initialState = Immutable.Map({
  selectedTag: "",
  isDrawerOpen: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TAG:
      return state.set('selectedTag', action.tag)

    case SUBMIT_COMPLETE:
      return state.set('selectedTag', '')

    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'))

    default:
      return state
  }
}
