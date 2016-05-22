import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {deleteArticle} from '../actions/ArticleActions'
import CreateArticleButton from '../components/buttons/CreateArticleButton'
import EditArticleButton from '../components/buttons/EditArticleButton'
import DeleteArticleButton from '../components/buttons/DeleteArticleButton'
import styles from '../components/styles'

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
          textAlign: "center",
          borderRight: "1px solid #eeeeee"
        }}
        className="vertical-menu fullHeight"
        >

        <div>
          <CreateArticleButton
            onClick={this.handleCreateClick.bind(this)}
            style={styles.small}
            iconStyle={styles.smallIcon}
            />
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
  articles: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    deleteArticle
  }
}

export default connect(mapStateToProps)(VerticalMenu)
