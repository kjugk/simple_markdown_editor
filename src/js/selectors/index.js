import { createSelector } from 'reselect'
import moment from 'moment'
import Immutable from 'immutable'

const getSelectedId = (state) => state.articles.selectedId
const getArticles = (state) => state.articles.items
const getSelectedTag = (state) => state.tag.get('selectedTag')

export const getSelectedArticle = createSelector(
  [ getSelectedId, getArticles ],
  (selectedId, articles) => {
    return articles.filter(a => a.id === selectedId).first() || {}
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
        return article.tags && article.tags.indexOf(tag) >= 0
      })
    }
  }
)

export const getAllTags = createSelector(
  [ getArticles ],
  (articles) => {
    let tags = Immutable.Set([])
    articles.forEach((a) => {
      tags = tags.concat(a.tags)
    })

    return tags
  }
)
