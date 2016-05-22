import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import {createArticle, editArticle, deleteArticle} from '../actions/ArticleActions'

import CreateArticleButton from '../components/buttons/CreateArticleButton'
import IconButton from 'material-ui/IconButton';
import EditArticleButton from '../components/buttons/EditArticleButton'
import DeleteArticleButton from '../components/buttons/DeleteArticleButton'
import styles from '../components/styles'

class HorizontalMenu extends Component {
  handleCreateClick(){
    hashHistory.push('articles/new')
  }

  handleEditClick(){
    hashHistory.push(`articles/${this.props.articles.selectedId}/edit`)
  }

  handleDeleteClick(){
    this.props.dispatch(this.props.deleteArticle(this.props.articles.selectedId))
  }

  render(){
    const{articles} = this.props
    return(
      <div
        className="horizontal-menu flex-container flex-align-center"
        style={{borderBottom: "1px solid #EEE"}}
        >

        <div>
          <CreateArticleButton
            onClick={this.handleCreateClick.bind(this)}
            />
        </div>

        <div style={{marginLeft: "auto"}}>
          <EditArticleButton
            disabled={articles.selectedId === null}
            onClick={this.handleEditClick.bind(this)}
            />
          <DeleteArticleButton
            disabled={articles.selectedId === null}
            onClick={this.handleDeleteClick.bind(this)}
            />
        </div>
      </div>
    )
  }
}

HorizontalMenu.propTypes = {
  createArticle: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    createArticle,
    editArticle,
    deleteArticle
  }
}

export default connect(mapStateToProps)(HorizontalMenu)