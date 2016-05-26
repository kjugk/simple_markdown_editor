import { createSelector } from 'reselect'
import moment from 'moment'

const getSelectedId = (state) => state.articles.selectedId
const getArticles = (state) => state.articles.items

export const getSelectedArticle = createSelector(
  [ getSelectedId, getArticles ],
  (selectedId, articles) => {
    return articles.filter(a => a.id === selectedId)[0] || null
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
