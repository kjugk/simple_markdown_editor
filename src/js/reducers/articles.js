import { FETCH_ARTICLES, RECEIVE_ARTICLES, SELECT_ARTICLE, CANCEL_EDIT,
         CREATE_ARTICLE, EDIT_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from '../actions/ArticleActions'

const initialState = {
  isFetching: false,
  isEditing: false,
  selectedId: undefined,
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
        selectedId: action.articles.length >= 1 ? action.articles[0].id : undefined,
        items: action.articles
      })

    case SELECT_ARTICLE:
      return Object.assign({}, state, {
        selectedId: action.articleId
      })

    case CREATE_ARTICLE:
      return Object.assign({}, state, {
        isEditing: true,
        selectedId: action.article.id,
        items: [action.article, ...state.items]
      })

    case EDIT_ARTICLE:
      return Object.assign({}, state, {
        isEditing: true,
        selectedId: action.articleId,
      })

    case UPDATE_ARTICLE:
      return Object.assign({}, state, {
        isEditing: false,
        selectedId: action.articleId,
        items: state.items.map((item)=>{
          if(item.id !== action.articleId){
            return item
          } else {
            return { ...item, body: action.body, updatedAt: action.updatedAt }
          }
        })
      })

    case DELETE_ARTICLE:
      const newItems = state.items.filter((item)=>{return item.id !== action.articleId})
      return Object.assign({}, state, {
        items: newItems,
        selectedId: newItems.length >= 1 ? newItems[0].id : undefined
      })

    case CANCEL_EDIT:
      return Object.assign({}, state, {
        isEditing: false
      })

    default:
      return state
  }
}

export function getSelectedArticle(state){
  const selectedId = state.articles.selectedId
  if(selectedId == undefined) {return null}

  return state.articles.items.filter((a)=>{return a.id === selectedId})[0]
}
