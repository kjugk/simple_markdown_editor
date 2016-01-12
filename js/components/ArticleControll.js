import React, { PropTypes, Component } from 'react'
import moment from 'moment'
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';

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
      <div style={{borderBottom: "1px solid #EEE", position: "relative"}}>
        <IconButton iconClassName="material-icons"
                    tooltip="edit"
                    onTouchTap={this.handleEdit}>mode_edit</IconButton>

        <IconButton iconClassName="material-icons"
                    tooltip="delete"
                    onTouchTap={this.handleDelete}>delete</IconButton>

        <div style={{fontSize: "0.8em", position: "absolute", right: "5px", bottom: "5px"}}>
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
