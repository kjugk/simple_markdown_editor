import React, { PropTypes, Component } from 'react'
import marked from 'marked'

const ArticlePreview = (props) => {
  return (
    <div
      style={{padding: "10px"}}
      className="markdown-body"
      dangerouslySetInnerHTML={{__html: marked(props.articleBody)}}
      />
  )
}

ArticlePreview.propTypes = {
  articleBody: PropTypes.string.isRequired
}

export default ArticlePreview
