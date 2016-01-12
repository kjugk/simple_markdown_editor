import React, { PropTypes, Component } from 'react'
import moment from 'moment'
import RaisedButton from 'material-ui/lib/raised-button';

class ArticleControll extends Component{
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
      <div style={{padding: "10px", boxSizing: "border-box", minHeight: "57px", borderBottom: "1px solid #EEE"}}>
        <div style={{float: "left"}}>
          <RaisedButton label="edit" onTouchTap={this.handleEdit} />
          <RaisedButton style={{marginLeft: "10px"}} label="delete" onTouchTap={this.handleDelete} />
        </div>
        <div style={{overflow: "hidden", fontSize: "0.8em", textAlign: "right"}}>
          更新日:{moment(article.updatedAt).format('YYYY/MM/DD HH:mm:ss')}
        </div>
      </div>
    )
  }
}

ArticleControll.propTypes = {
  article: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default ArticleControll
