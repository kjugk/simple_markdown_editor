import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import VerticalMenu from './VerticalMenu'
import HorizontalMenu from './HorizontalMenu'
import SelectedTag from '../components/SelectedTag'
import TagDrawer from './TagDrawer'

import {selectArticle} from '../actions/ArticleActions'
import {selectTag} from '../actions/TagActions'
import {getSelectedArticle, getSordedArticles, getAllTags, getArticlesByTag} from '../selectors'

class ArticleViewer extends Component{
  componentDidUpdate(){
    if(!this.props.items.isEmpty() && !this.props.articles.selectedId){
      this.props.dispatch(selectArticle(this.props.items.first().id))
    }
  }

  render(){
    const{articles, items, selectedArticle, selectedTag, selectArticle, selectTag, dispatch} = this.props

    return(
      <div className="fluid-container fullHeight">
        <HorizontalMenu />

        <div className="col-xs-6 col-lg-4 no-gutter article-list-box fullHeight">
          <VerticalMenu />

          <div style={{overflow: "hidden"}}>
            <SelectedTag
              tag={selectedTag}
              onDeleteClick={()=>{
                dispatch(selectTag(""))
              }}
              />

            <ArticleList
              selectedId={articles.selectedId}
              items={items}
              onItemClick={(id)=>{
                dispatch(selectArticle(id))
              }}
              />
          </div>
        </div>

        <div className="col-xs-6 col-lg-8 no-gutter">
          <ArticlePreview
            articleBody={selectedArticle.body || ""}
            tags={selectedArticle.tags}
            />
        </div>

        <TagDrawer />
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  articles: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  selectedArticle: PropTypes.object,
  selectedTag: PropTypes.string,
  selectArticle: PropTypes.func.isRequired,
  selectTag: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    items: getArticlesByTag(state),
    selectedArticle: getSelectedArticle(state),
    selectedTag: state.tag.get('selectedTag'),
    selectArticle,
    selectTag
  }
}

export default connect(mapStateToProps)(ArticleViewer)
