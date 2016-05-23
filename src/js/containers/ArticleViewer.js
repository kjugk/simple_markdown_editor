import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import VerticalMenu from './VerticalMenu'
import HorizontalMenu from './HorizontalMenu'

import {selectArticle} from '../actions/ArticleActions'
import {getSelectedArticle, getSordedArticles} from '../selectors'

class ArticleViewer extends Component{
  render(){
    const{articles, items, selectedArticle, selectArticle, dispatch} = this.props

    return(
      <div className="fluid-container fullHeight">
        <HorizontalMenu />

        <div className="col-xs-6 col-lg-4 no-gutter article-list-box fullHeight">
          <VerticalMenu />

          <ArticleList
            selectedId={articles.selectedId}
            items={items}
            onItemClick={(id)=>{dispatch(selectArticle(id))}}
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
  items: PropTypes.array.isRequired,
  selectedArticle: PropTypes.object,
  selectArticle: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    items: getSordedArticles(state),
    selectedArticle: getSelectedArticle(state),
    selectArticle,
  }
}

export default connect(mapStateToProps)(ArticleViewer)
