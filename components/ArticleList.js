import React, { PropTypes, Component } from 'react'

class ArticleList extends Component{
  getText(body){
    return body ? body : "未設定"
  }

  render(){
    const { articles, onItemClick } = this.props
    const { items } = articles

    function getClassName(item){
      let name = "article-list-item"
      if(item.id === articles.selectedId){
        return `${name} selected`
      }
      return name
    }

    return(
      <ul className="article-list">
        {items.map(
          (article)=>{
            return(<li key={article.id}
                       className={getClassName(article)}
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
  articles: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ArticleList
