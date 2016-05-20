import React, { PropTypes, Component } from 'react'
import moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'

const style = {
  borderTop: "1px solid #EEE",
  borderBottom: "1px solid #EEE",
  position: "relative"
}

class ArticleControll extends Component{
  render(){
    const { article } = this.props

    return(
      <div style={style}>
        <IconButton iconClassName="material-icons"
                    tooltip="edit"
                    onClick={this.props.onEditClick}>mode_edit</IconButton>

        <IconButton iconClassName="material-icons"
                    tooltip="delete"
                    onClick={this.props.onDeleteClick}>delete</IconButton>

        <div style={{fontSize: "0.8em", position: "absolute", right: "5px", bottom: "5px"}}>
          更新日:{moment(article.updatedAt).format('YYYY/MM/DD HH:mm:ss')}
        </div>
      </div>
    )
  }
}

ArticleControll.propTypes = {
  article: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
}

export default ArticleControll
