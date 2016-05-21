import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {createArticle, editArticle, deleteArticle} from '../actions/ArticleActions'
import CreateArticleButton from '../components/buttons/CreateArticleButton'
import IconButton from 'material-ui/IconButton';
import EditArticleButton from '../components/buttons/EditArticleButton'
import DeleteArticleButton from '../components/buttons/DeleteArticleButton'

class VerticalMenu extends Component {
  handleEditClick(){
    this.props.dispatch(this.props.editArticle(this.props.articles.selectedId))
  }

  handleDeleteClick(){
    this.props.dispatch(this.props.deleteArticle(this.props.articles.selectedId))
  }

  render(){
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
          <CreateArticleButton onClick={this.props.createArticle} />
        </div>
        <div>
          <EditArticleButton onClick={this.handleEditClick.bind(this)} />
        </div>
        <div>
          <DeleteArticleButton onClick={this.handleDeleteClick.bind(this)} />
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
