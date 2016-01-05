import { RECEIVE_ARTICLES, SELECT_ARTICLE,
         CREATE_ARTICLE, EDIT_ARTICLE, SAVE_ARTICLE, DELETE_ARTICLE } from '../actions/articles'

const initialState = {
  isEditing: false,
  selectedId: undefined,
  items: []
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      //TODO 0件の場合を考慮
      return Object.assign({}, state, {
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
        items: [action.article].concat(state.items)
      })

    case EDIT_ARTICLE:
      return Object.assign({}, state, {
        isEditing: true,
        selectedId: action.articleId,
      })

    case SAVE_ARTICLE:
      return Object.assign({}, state, {
        isEditing: false,
        selectedId: action.articleId,
        items: state.items.map((item)=>{
          if(item.id !== action.articleId){
            return item
          } else {
            return {...item, body: action.body }
          }
        })
      })

    case DELETE_ARTICLE:
      return Object.assign({}, state, {
        selectedId: undefined,
        items: state.items.filter((item)=>{return item.id !== action.articleId})
      })

    default:
      return state
  }
}
