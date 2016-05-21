import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import {createArticle, editArticle, deleteArticle} from '../actions/ArticleActions'

import CreateArticleButton from '../components/buttons/CreateArticleButton'
import IconButton from 'material-ui/IconButton';
import EditArticleButton from '../components/buttons/EditArticleButton'
import DeleteArticleButton from '../components/buttons/DeleteArticleButton'

class VerticalMenu extends Component {
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
        style={{
          float: "left",
          marginTop: "-1px",
          background: "rgb(0, 188, 212)",
          textAlign: "center",
          width: "60px"
        }}
        className="vertical-menu-box fullHeight"
        >

        <div>
          <CreateArticleButton onClick={this.handleCreateClick.bind(this)} />
        </div>
        <div>
          <EditArticleButton
            disabled={articles.selectedId === null}
            onClick={this.handleEditClick.bind(this)}
            />
        </div>
        <div>
          <DeleteArticleButton
            disabled={articles.selectedId === null}
            onClick={this.handleDeleteClick.bind(this)}
            />
        </div>
      </div>
    )
  }
}

VerticalMenu.propTypes = {
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

export default connect(mapStateToProps)(VerticalMenu)
