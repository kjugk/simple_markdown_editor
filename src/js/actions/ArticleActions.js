import shortid from 'shortid'
import * as Storage from '../lib/storage'

export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const SELECT_ARTICLE = 'SELECT_ARTICLES'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

//TODO tags fieldない場合は、[] で初期化する
export function fetchArticles() {
  return (dispatch)=>{
    dispatch({type: FETCH_ARTICLES})
    setTimeout(()=>{
      const articles = Storage.getArticles()
      return dispatch({type: RECEIVE_ARTICLES, articles})
    }, 1500)
  }
}

export function selectArticle(articleId) {
  return {type: SELECT_ARTICLE, articleId}
}

export function deleteArticle(articleId){
  Storage.deleteArticle(articleId)
  return {type: DELETE_ARTICLE, articleId, message: "Delete complete!!!"}
}
