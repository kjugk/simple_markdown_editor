import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/ArticleActions'
import Progress from '../components/Progress'

class App extends Component {
  componentDidMount(){
    const { dispatch, fetchArticles } = this.props
    dispatch(fetchArticles())
  }

  render(){
    return(
      <div className="fullHeight">
        <header style={{borderBottom: "1px solid #eeeeee", padding: "20px 6px 10px 6px"}}>
          <h2>Simple Markdown Editor</h2>
          <div style={{textAlign: "right"}}>
            <a href="https://github.com/kjugk/simple_markdown_editor">source</a>
          </div>
        </header>

        {this.props.articles.isFetching && <Progress />}
        {!this.props.articles.isFetching && this.props.children}
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
