import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {deleteArticle} from '../actions/ArticleActions'
import {toggleDrawer} from '../actions/TagActions'
import CreateArticleButton from '../components/buttons/CreateArticleButton'
import EditArticleButton from '../components/buttons/EditArticleButton'
import DeleteArticleButton from '../components/buttons/DeleteArticleButton'
import TagButton from '../components/buttons/TagButton'
import {getAllTags} from '../selectors'

class HorizontalMenu extends Component {
  render(){
    const{ articles, tags } = this.props

    return(
      <div className="horizontal-menu flex-container flex-align-center" >
        <div>
          <CreateArticleButton
            onClick={this.handleCreateClick.bind(this)}
            />
        </div>
        <div>
          <TagButton
            disabled={tags.isEmpty()}
            onClick={this.handleToggleDrawer.bind(this)}
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

  handleCreateClick(){
    hashHistory.push('articles/new')
  }

  handleEditClick(){
    hashHistory.push(`articles/${this.props.articles.selectedId}/edit`)
  }

  handleDeleteClick(){
    this.props.dispatch(this.props.deleteArticle(this.props.articles.selectedId))
  }

  handleToggleDrawer(){
    this.props.dispatch(this.props.toggleDrawer())
  }
}

HorizontalMenu.propTypes = {
  articles: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    tags: getAllTags(state),
    deleteArticle,
    toggleDrawer
  }
}

export default connect(mapStateToProps)(HorizontalMenu)
