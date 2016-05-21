import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import VerticalMenu from './VerticalMenu'
import HorizontalMenu from './HorizontalMenu'

import { getSelectedArticle } from '../reducers/articles'
import { selectArticle, createArticle,
         editArticle, deleteArticle } from '../actions/ArticleActions'


class ArticleViewer extends Component{
  render(){
    const{articles, selectedArticle, selectArticle, dispatch} = this.props

    return(
      <div className="fluid-container fullHeight">
        <HorizontalMenu />
        <div className="col-xs-6 col-lg-4 no-gutter article-list-box fullHeight">
          <VerticalMenu />

          <ArticleList
            articles={articles}
            onItemClick={(id)=>{
              dispatch(selectArticle(id))
            }}
            />
        </div>

        <div className="col-xs-6 col-lg-8 no-gutter">
          { !!articles.selectedId &&
            <div>
              <ArticlePreview articleBody={selectedArticle.body || ""} />
            </div>
          }
        </div>
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  articles: PropTypes.object.isRequired,
  selectArticle: PropTypes.func.isRequired,
  selectedArticle: PropTypes.object
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    selectArticle,
    selectedArticle: getSelectedArticle(state),
  }
}

export default connect(mapStateToProps)(ArticleViewer)
