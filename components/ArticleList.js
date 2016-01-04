import React, { PropTypes, Component } from 'react'

class ArticleList extends Component{
  getText(body){
    return body ? body : "未設定"
  }

  render(){
    const { items, onItemClick } = this.props

    return(
      <ul>
        {items.map(
          (article)=>{
            return(<li key={article.id}
                       onClick={()=>{onItemClick(article.id)}}>
                         {this.getText(article.body)}
                   </li>)
          }
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
