import React, {PropTypes, Component} from 'react'
import Tag from './Tag'
import marked from 'marked'

const ArticlePreview = (props) => {
  return (
    <div style={{padding: "10px 8px"}}>
      {props.tags !== [] &&
        <div>
          {props.tags.map((t, i)=>{
            return <Tag key={i} value={t} deletable={false} />
          })}
        </div>
      }
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{__html: marked(props.articleBody)}}
        />
    </div>
  )
}

ArticlePreview.propTypes = {
  tags: PropTypes.array,
  articleBody: PropTypes.string.isRequired
}

ArticlePreview.defaultProps = {
  tags: []
}

export default ArticlePreview
