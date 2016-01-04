import React, { PropTypes, Component } from 'react'

class ArticleList extends Component{
  handleItemClick(id){
    const { onItemClick } = this.props
    onItemClick(id)
  }
  render(){
    const { items } = this.props
    return(
      <ul>
        {items.map(article =>
          <li key={article.id}
              onClick={()=>{this.handleItemClick(article.id)}}>{article.body}</li>
        )}
      </ul>
    )
  }
}

ArticleList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ArticleList
