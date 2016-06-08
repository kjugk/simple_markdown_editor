import Immutable from 'immutable'
import {
  FETCH_ARTICLES, RECEIVE_ARTICLES, SELECT_ARTICLE, DELETE_ARTICLE
} from '../actions/ArticleActions'

import {SUBMIT_COMPLETE} from '../actions/ArticleFormActions'
import {SELECT_TAG} from '../actions/TagActions'

const initialState = {
  isFetching: false,
  selectedId: null,
  items: Immutable.List([])
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_ARTICLES:
      const items = Immutable.List(action.articles)
      return Object.assign({}, state, {
        isFetching: false,
        selectedId: items.isEmpty() ? null : items.first().id,
        items
      })

    case SELECT_ARTICLE:
      return Object.assign({}, state, {
        selectedId: action.articleId,
      })

    case SUBMIT_COMPLETE:
      return Object.assign({}, state, {
        selectedId: action.articleId,
        items: Immutable.List(action.articles)
      })

    case DELETE_ARTICLE:
      const newItems = state.items.filter((item)=>{return item.id !== action.articleId})
      return Object.assign({}, state, {
        items: newItems,
        selectedId: newItems.isEmpty() ? null : newItems.first().id
      })

    case SELECT_TAG:
      return Object.assign({}, state, {
        selectedId: null
      })

    default:
      return state
  }
}
