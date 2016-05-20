import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import ArticleControll from '../components/ArticleControll'

import { getSelectedArticle } from '../reducers/articles'
import { selectArticle, createArticle,
         editArticle, deleteArticle } from '../actions/articles'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'

class ArticleViewer extends Component{
  handleEdit(){
    const {articles, editArticle, dispatch} = this.props
    dispatch(editArticle(articles.selectedId))
  }

  handleDelete(){
    const {articles, deleteArticle, dispatch} = this.props
    dispatch(deleteArticle(articles.selectedId))
  }

  render(){
    const{articles, selectedArticle, selectArticle, createArticle, dispatch} = this.props

    return(
      <div>
        <div className="article-list-area">
          <ArticleList
            articles={articles}
            onItemClick={(id)=>{
              dispatch(selectArticle(id))
            }}
            />
        </div>

        <div className="article-preview-area">
          { selectedArticle &&
            <div>
              <ArticleControll
                article={selectedArticle}
                onEditClick={this.handleEdit.bind(this)}
                onDeleteClick={this.handleDelete.bind(this)}
                />

              <ArticlePreview articleBody={selectedArticle.body || ""} />
            </div>
          }
        </div>

        <FloatingActionButton
          style={{position: "fixed", right: "10px", bottom: "10px"}}
          onClick={()=>{
            dispatch(createArticle())
          }}
          >
          <FontIcon
            className="material-icons"
            color="#fff"
            >
            create
          </FontIcon>
        </FloatingActionButton>
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  articles: PropTypes.object.isRequired,
  selectArticle: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  editArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  selectedArticle: PropTypes.object
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    selectArticle,
    createArticle,
    editArticle,
    deleteArticle,
    selectedArticle: getSelectedArticle(state),
  }
}

export default connect(mapStateToProps)(ArticleViewer)
