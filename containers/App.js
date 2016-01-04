import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticleViewer from '../components/ArticleViewer'
import ArticleEditor from '../components/ArticleEditor'
import { selectArticle, fetchArticles, createArticle, editArticle, saveArticle, deleteArticle } from '../actions/articles'

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchArticles())
  }

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

  render(){
    const { selectedArticle, articles } = this.props

    return(
      <div>
        {!articles.isEditing &&
          <div>
            <div style={{width: "200px", float: "left"}}>
              <input type="button" value="create" onClick={this.handleCreate.bind(this)} />
              <ArticleList items={articles.items} onItemClick={this.handleItemSelect.bind(this)} />
            </div>

            <div style={{width: "500px", overflow: "hidden"}}>
              { selectedArticle &&
                <ArticleViewer article={selectedArticle}
                               onEdit={this.handleEdit.bind(this)}
                               onDelete={this.handleDelete.bind(this)} />
              }
            </div>
          </div>
        }
        {articles.isEditing &&
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
