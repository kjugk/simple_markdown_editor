import React, { PropTypes, Component } from 'react'
import marked from 'marked'

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import RaisedButton from 'material-ui/lib/raised-button';

class ArticleDisplay extends Component{
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
        <div style={{padding: "10px", borderBottom: "1px solid #EEE"}}>
          <RaisedButton label="edit" onTouchTap={this.handleEdit} />
          <RaisedButton style={{marginLeft: "10px"}} label="delete" onTouchTap={this.handleDelete} />
        </div>

        <div style={{padding: "10px"}}
             className="markdown-body"
             dangerouslySetInnerHTML={{__html: marked(article.body)}} />
      </div>
    )
  }
}

ArticleDisplay.propTypes = {
  article: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default ArticleDisplay
