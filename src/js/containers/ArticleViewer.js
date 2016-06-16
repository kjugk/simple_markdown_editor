import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import VerticalMenu from './VerticalMenu'
import HorizontalMenu from './HorizontalMenu'
import SelectedTag from '../components/SelectedTag'
import TagDrawer from './TagDrawer'
import GlobalMessage from './GlobalMessage'

import {selectArticle} from '../actions/ArticleActions'
import {selectTag} from '../actions/TagActions'
import {getSelectedArticle, getSordedArticles, getAllTags, getArticlesByTag} from '../selectors'

class ArticleViewer extends Component{
  constructor(props){
    super(props)
    this.state = {viewHeight: 0}
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize(e) {
    this.setState({viewHeight: window.innerHeight - this.refs.viewer.offsetTop})
  }

  componentDidMount(){
    this.setState({viewHeight: window.innerHeight - this.refs.viewer.offsetTop})
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(){
    const {items, articles, dispatch, selectArticle} = this.props

    if(!items.isEmpty() && !articles.selectedId){
      dispatch(selectArticle(items.first().id))
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render(){
    const{articles, items, selectedArticle, selectedTag, selectArticle, selectTag, dispatch} = this.props

    return(
      <div className="fluid-container">
        <HorizontalMenu />

        <div ref="viewer" className="col-xs-6 col-lg-4 no-gutter l-article-list" style={{overflow: "scroll", height: this.state.viewHeight}}>
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
        <GlobalMessage />
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
    selectTag,
  }
}

export default connect(mapStateToProps)(ArticleViewer)
