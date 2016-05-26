import { createSelector } from 'reselect'
import moment from 'moment'

const getSelectedId = (state) => state.articles.selectedId
const getSelectedTag = (state) => state.tag.selectedTag
const getArticles = (state) => state.articles.items

export const getSelectedArticle = createSelector(
  [ getSelectedId, getArticles ],
  (selectedId, articles) => {
    return articles.filter(a => a.id === selectedId)[0] || {}
  }
)

//TODO sort順のstateで、ロジックを分ける
export const getSordedArticles = createSelector(
  [ getArticles ],
  (articles) => {
    return articles.sort((a, b) => {
      return moment(a.updatedAt).isBefore(b.updatedAt) ? 1 : -1
    })
  }
)

export const getArticlesByTag = createSelector(
  [ getSordedArticles, getSelectedTag ],
  (articles, tag) => {
    if(tag === ""){
      return articles
    } else {
      return articles.filter((article) => {
        return article.tags.indexOf(tag) >= 0
      })
    }
  }
)

export const getAllTags = createSelector(
  [ getArticles ],
  (articles) => {
    let tags = []
    articles.forEach((a) => {
      tags.push(...a.tags)
    })

    return [...new Set(tags)]
  }
)
