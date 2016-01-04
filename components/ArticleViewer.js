import React, { PropTypes, Component } from 'react'

class ArticleViewer extends Component{
  render(){
    const { article } = this.props
    return(
      <div>
        { article.body }
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleViewer
