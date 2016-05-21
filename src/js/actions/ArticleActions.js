import shortid from 'shortid'
import * as Storage from '../lib/storage'

export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const SELECT_ARTICLE = 'SELECT_ARTICLES'
export const CREATE_ARTICLE = 'CREATE_ARTICLE'
export const EDIT_ARTICLE = 'EDIT_ARTICLE'
export const CANCEL_EDIT = 'CANCEL_EDIT'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export function fetchArticles() {
  return (dispatch)=>{
    dispatch({type: FETCH_ARTICLES})
    setTimeout(()=>{
      const articles = Storage.getArticles()
      return dispatch({type: RECEIVE_ARTICLES, articles})
    }, 1500);
  }
}

export function selectArticle(articleId) {
  return {type: SELECT_ARTICLE, articleId}
}

export function createArticle() {
  const article = {id: shortid.generate(), body: ""}
  Storage.setArticle(article)

  return {type: CREATE_ARTICLE, article}
}

export function editArticle(articleId) {
  return {type: EDIT_ARTICLE, articleId}
}

export function updateArticle(articleId, body) {
  Storage.updateArticle(articleId, body)
  return {type: UPDATE_ARTICLE, articleId, body}
}

export function deleteArticle(articleId){
  Storage.deleteArticle(articleId)
  return {type: DELETE_ARTICLE, articleId}
}

export function cancelEdit(){
  return {type: CANCEL_EDIT}
}
