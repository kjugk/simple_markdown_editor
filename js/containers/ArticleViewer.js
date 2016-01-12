import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import ArticleControll from '../components/ArticleControll'
import { getSelectedArticle } from '../reducers/articles.js'
import { selectArticle, createArticle,
         editArticle, deleteArticle } from '../actions/articles'

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';

class ArticleViewer extends Component{
  handleEdit(id){
    const { editArticle, dispatch } = this.props
    dispatch(editArticle(id))
  }

  handleDelete(id){
    const { deleteArticle, dispatch } = this.props
    dispatch(deleteArticle(id))
  }

  render(){
    const{articles, selectedArticle, selectArticle, createArticle, dispatch} = this.props

    return(
      <div>
        <div className="article-list-area">
          <ArticleList articles={articles}
                       onItemClick={(id)=>{
                         dispatch(selectArticle(id))
                       }}/>
        </div>

        <div className="article-preview-area">
          { selectedArticle &&
            <div>
              <ArticleControll article={selectedArticle}
                               onEdit={this.handleEdit.bind(this)}
                               onDelete={this.handleDelete.bind(this)} />

              <ArticlePreview articleBody={selectedArticle.body || ""} />
            </div>
          }
        </div>

        <FloatingActionButton style={{position: "fixed", right: "10px", bottom: "10px"}}
                              onTouchTap={()=>{
                                dispatch(createArticle())
                              }}>
          <FontIcon className="material-icons" color="#fff">create</FontIcon>
        </FloatingActionButton>
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  articles: PropTypes.object.isRequired,
  selectedArticle: PropTypes.object,
  selectArticle: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  editArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    selectedArticle: getSelectedArticle(state),
    selectArticle,
    createArticle,
    editArticle,
    deleteArticle
  }
}

export default connect(mapStateToProps)(ArticleViewer)
