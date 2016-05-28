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
import styles from '../components/styles'

class VerticalMenu extends Component {

  render(){
    const{ articles, tags } = this.props

    return(
      <div className="vertical-menu fullHeight">
        <div>
          <CreateArticleButton
            onClick={this.handleCreateClick}
            style={styles.small}
            iconStyle={styles.smallIcon}
            />
        </div>
        <div>
          <TagButton
            disabled={tags.length <= 0}
            onClick={this.handleToggleDrawer.bind(this)}
            />
        </div>
        <div style={{marginTop: "10px"}}>
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

  handleCreateClick(){
    hashHistory.push('articles/new')
  }

  handleEditClick(){
    hashHistory.push(`articles/${this.props.articles.selectedId}/edit`)
  }

  handleDeleteClick(){
    const { dispatch, deleteArticle, articles } = this.props
    dispatch(deleteArticle(articles.selectedId))
  }

  handleToggleDrawer(){
    const { dispatch, toggleDrawer } = this.props
    dispatch(toggleDrawer())
  }
}

VerticalMenu.propTypes = {
  articles: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
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

export default connect(mapStateToProps)(VerticalMenu)
