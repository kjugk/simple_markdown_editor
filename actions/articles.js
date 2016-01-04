import store from 'store'
import shortid from 'shortid'

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const SELECT_ARTICLE = 'SELECT_ARTICLES'
export const CREATE_ARTICLE = 'CREATE_ARTICLE'
export const EDIT_ARTICLE = 'EDIT_ARTICLE'
export const SAVE_ARTICLE = 'SAVE_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export function fetchArticles() {
  return (dispatch, getState)=>{
    dispatch({type: RECEIVE_ARTICLES, articles: [
      {id: 1, body: "### hoge\nfoo"},
      {id: 2, body: "fuga"}
    ]})
  }
}

export function selectArticle(articleId) {
  return {type: SELECT_ARTICLE, articleId}
}

export function createArticle() {
  const article = {id: shortid.generate(), body: ""}
  return {type: CREATE_ARTICLE, article}
}

export function editArticle(articleId) {
  return {type: EDIT_ARTICLE, articleId}
}

export function saveArticle(articleId, body) {
  return {type: SAVE_ARTICLE, articleId, body}
}

export function deleteArticle(articleId){
  return {type: DELETE_ARTICLE, articleId}
}
