import store from 'store'

export function getArticles(){
  return store.get('articles') || []
}

export function setArticle(article){
  article['updatedAt'] = new Date()
  let articles = getArticles()
  store.set('articles', [article, ...articles])
}

export function getArticle(articleId){
  let articles = getArticles()
  return articles.filter((a)=>{return a.id === articleId})[0]
}

export function updateArticle(articleId, body, tags){
  let articles = getArticles()

  articles = articles.map((a)=>{
    if(a.id === articleId){
      a.body = body
      a.tags = tags
      a.updatedAt = new Date()
    }
    return a
  })
  store.set('articles', articles)
}

export function deleteArticle(articleId){
  let articles = getArticles()
  articles = articles.filter((a)=>{return a.id !== articleId})
  store.set('articles', articles)
}
