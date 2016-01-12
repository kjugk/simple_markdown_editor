import React, { PropTypes, Component } from 'react'
import marked from 'marked'

class ArticlePreview extends Component{
  render(){
    const { articleBody } = this.props
    return(
      <div style={{padding: "10px"}}
           className="markdown-body"
           dangerouslySetInnerHTML={{__html: marked(articleBody)}} />
    )
  }
}

ArticlePreview.propTypes = {
  articleBody: PropTypes.string.isRequired
}

export default ArticlePreview
