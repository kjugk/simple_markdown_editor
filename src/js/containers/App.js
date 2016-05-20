import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/ArticleActions'

import ArticleViewer from './ArticleViewer'
import ArticleEditor from './ArticleEditor'
import Progress from '../components/Progress'

class App extends Component {
  componentDidMount(){
    const { dispatch, fetchArticles } = this.props
    dispatch(fetchArticles())
  }

  render(){
    return(
      <div className="app fullHeight">
        <h1>Simple Markdown Editor</h1>

        {renderContent(this.props.articles)}
      </div>
    )
  }
}

const renderContent = (articles) => {
  if(articles.isFetching){
    return <Progress visible={articles.isFetching} />

  } else if(articles.isEditing){
    return <ArticleEditor />

  } else {
    return <ArticleViewer />
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
