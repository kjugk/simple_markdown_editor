import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchArticles} from '../actions/ArticleActions'
import Progress from '../components/Progress'

class App extends Component {
  componentDidMount(){
    const { dispatch, fetchArticles } = this.props
    dispatch(fetchArticles())
  }

  render(){
    const { dispatch, articles, children } = this.props
    return(
      <div className="l-container">
        <header className="l-header">
          <h2>Simple Markdown Editor</h2>
          <div>
            <a href="https://github.com/kjugk/simple_markdown_editor">source</a>
          </div>
        </header>

        <div className="l-content">
          {articles.isFetching && <Progress />}
          {!articles.isFetching && children}
        </div>
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

export default connect(mapStateToProps)(App)
