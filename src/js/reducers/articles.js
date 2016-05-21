import {
  FETCH_ARTICLES, RECEIVE_ARTICLES, SELECT_ARTICLE, DELETE_ARTICLE}
from '../actions/ArticleActions'

import {SUBMIT_COMPLETE} from '../actions/ArticleFormActions'

const initialState = {
  isFetching: false,
  selectedId: null,
  items: []
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        selectedId: action.articles.length >= 1 ? action.articles[0].id : null,
        items: action.articles
      })

    case SELECT_ARTICLE:
      return Object.assign({}, state, {
        selectedId: action.articleId
      })

    case SUBMIT_COMPLETE:
      return Object.assign({}, state, {
        selectedId: action.articleId,
        items: action.articles
      })

    case DELETE_ARTICLE:
      const newItems = state.items.filter((item)=>{return item.id !== action.articleId})
      return Object.assign({}, state, {
        items: newItems,
        selectedId: newItems.length >= 1 ? newItems[0].id : null
      })

    default:
      return state
  }
}

export function getSelectedArticle(state){
  const selectedId = state.articles.selectedId
  if(selectedId === null) {return {}}

  return state.articles.items.filter((a)=>{return a.id === selectedId})[0]
}
