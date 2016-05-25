import shortid from 'shortid'
import * as Storage from '../lib/storage'

export const INIT_FORM_COMPLETE = 'INIT_FORM_COMPLETE'
export const CHANGE_BODY = 'CHANGE_BODY'
export const SUBMIT_TAG = 'SUBMIT_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const SUBMIT_COMPLETE = 'SUBMIT_COMPLETE'
export const CLEAR_FORM = 'CLEAR_FORM'

export function initForm(articleId) {
  let article = Storage.getArticle(articleId)
  //TODO ERROR check Storeageにないときは、karaのarticle返す
  return {type: INIT_FORM_COMPLETE, article}
}

export function clearForm() {
  return {type: CLEAR_FORM}
}

export function changeBody(body) {
  return {type: CHANGE_BODY, body}
}

export function submitTag(tag) {
  return {type: SUBMIT_TAG, tag}
}

export function deleteTag(tag) {
  return {type: DELETE_TAG, tag}
}

export function submit(articleId, body, tags) {
  let id = articleId === null ? shortid.generate() : articleId
  let article = {id, body, tags}

  if(articleId === null){
    Storage.setArticle(article)
  } else {
    Storage.updateArticle(id, body, tags)
  }

  let articles = Storage.getArticles()
  return {type: SUBMIT_COMPLETE, articleId: article.id, articles}
}
