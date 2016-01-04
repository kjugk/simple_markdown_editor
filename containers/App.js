import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import ArticleViewer from '../components/ArticleViewer'
import { selectArticle, fetchArticles } from '../actions/articles'

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchArticles())
  }

  handleItemSelect(id){
    const { dispatch } = this.props
    dispatch(selectArticle(id))
  }

  render(){
    const { article, articles } = this.props
    return(
      <div>
        <div style={{width: "200px", float: "left"}}>
          <ArticleList items={articles.items} onItemClick={this.handleItemSelect.bind(this)} />
        </div>
        <div style={{width: "500px", overflow: "hidden"}}>
          {article &&
            <ArticleViewer article={article} />
          }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  articles: PropTypes.object.isRequired
}

function detectArticle(state){
  const selectedId = state.articles.selectedId
  if(selectedId === "") {return {}}

  return state.articles.items.filter((a)=>{return a.id === selectedId})[0]
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    article: detectArticle(state)
  }
}



export default connect(mapStateToProps)(App);
