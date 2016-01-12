import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AppProgress from '../components/AppProgress'
import ArticleViewer from '../components/ArticleViewer'
import ArticleEditor from '../components/ArticleEditor'
import { selectArticle, fetchArticles, createArticle,
         editArticle, saveArticle, deleteArticle } from '../actions/articles'


class App extends Component {
  handleItemSelect(id){
    const { dispatch } = this.props
    dispatch(selectArticle(id))
  }

  handleCreate(){
    const { dispatch } = this.props
    dispatch(createArticle())
  }

  handleEdit(id){
    const { dispatch } = this.props
    dispatch(editArticle(id))
  }

  handleSave(id, body){
    const { dispatch } = this.props
    dispatch(saveArticle(id, body))
  }

  handleDelete(id){
    const { dispatch } = this.props
    dispatch(deleteArticle(id))
  }

  componentWillMount(){
    const { dispatch } = this.props
    dispatch(fetchArticles())
  }

  render(){
    const { selectedArticle, articles } = this.props

    return(
      <div className="app">
        <AppProgress visible={articles.isFetching} />

        {!articles.isFetching && !articles.isEditing &&
          <div>
            <ArticleViewer articles={articles}
                           selectedArticle={selectedArticle}
                           onSelect={this.handleItemSelect.bind(this)}
                           onCreate={this.handleCreate.bind(this)}
                           onEdit={this.handleEdit.bind(this)}
                           onDelete={this.handleDelete.bind(this)} />
          </div>
        }
        {!articles.isFetching && articles.isEditing &&
          <ArticleEditor article={selectedArticle}
                         onSave={this.handleSave.bind(this)} />
        }
      </div>
    )
  }
}

App.propTypes = {
  articles: PropTypes.object.isRequired,
  selectedArticle: PropTypes.object
}

function getSelectedArticle(state){
  const selectedId = state.articles.selectedId
  if(selectedId == undefined) {return null}

  return state.articles.items.filter((a)=>{return a.id === selectedId})[0]
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    selectedArticle: getSelectedArticle(state)
  }
}

export default connect(mapStateToProps)(App);
