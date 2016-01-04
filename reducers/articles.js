import { RECEIVE_ARTICLES, SELECT_ARTICLE, CREATE_ARTICLE } from '../actions/articles'

const initialState = {
  editingId: "",
  selectedId: 1,
  items: []
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        items: action.articles
      })

    case SELECT_ARTICLE:
      return Object.assign({}, state, {
        selectedId: action.selectedId
      })

    case CREATE_ARTICLE:
      return Object.assign({}, state, {
        editingId: action.article.id,
        items: state.items.unshift(action.article)
      })

    default:
      return state
  }
}
