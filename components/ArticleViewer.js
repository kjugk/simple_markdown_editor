import React, { PropTypes, Component } from 'react'
import marked from 'marked'

class ArticleViewer extends Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    const { article, onEdit } = this.props
    onEdit(article.id)
  }

  handleDelete(){
    const { article, onDelete } = this.props
    onDelete(article.id)
  }

  render(){
    const { article } = this.props

    return(
      <div>
        <input type="button" value="edit" onClick={this.handleEdit} />
        <input type="button" value="delete" onClick={this.handleDelete} />
        <div dangerouslySetInnerHTML={{__html: marked(article.body)}} />
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  article: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default ArticleViewer
