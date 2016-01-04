import store from 'store'
import shortid from 'shortid'

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const SELECT_ARTICLE = 'SELECT_ARTICLES'
export const CREATE_ARTICLE = 'CREATE_ARTICLE'

export function fetchArticles() {
  return (dispatch, getState)=>{
    dispatch({type: RECEIVE_ARTICLES, articles: [
      {id: 1, body: "test"},
      {id: 2, body: "fuga"}
    ]})
  }
}

export function selectArticle(id) {
  return (dispatch, getState)=>{
    dispatch({type: SELECT_ARTICLE, selectedId: id})
  }
}

export function createArticle() {
  return (dispatch, getState)=>{
    const article = {id: shortid.generate(), body: ""}
    dispatch({type: CREATE_ARTICLE, article: article})
  }
}
