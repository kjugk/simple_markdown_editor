import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getSelectedArticle } from '../reducers/articles.js'
import { fetchArticles } from '../actions/articles'

import ArticleViewer from './ArticleViewer'
import ArticleEditor from './ArticleEditor'
import AppProgress from '../components/AppProgress'

class App extends Component {
  componentWillMount(){
    const { dispatch, fetchArticles } = this.props
    dispatch(fetchArticles())
  }

  render(){
    const { articles } = this.props

    return(
      <div className="app">
        <AppProgress visible={articles.isFetching} />

        {!articles.isFetching && !articles.isEditing &&
          <div>
            <ArticleViewer articles={articles}/>
          </div>
        }
        {!articles.isFetching && articles.isEditing &&
          <ArticleEditor />
        }
      </div>
    )
  }
}

App.propTypes = {
  articles: PropTypes.object.isRequired,
  fetchArticles: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    fetchArticles
  }
}

export default connect(mapStateToProps)(App);
