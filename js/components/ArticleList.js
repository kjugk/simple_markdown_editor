import React, { PropTypes, Component } from 'react'
import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';

class ArticleList extends Component{
  getTitle(body){
    let title = body.split(/\n/)[0]
    return title ? title : "未設定"
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
      <List style={{paddingTop: "0"}}>
        {items.map(
          (article)=>{
            return(<div key={article.id}>
                    <ListItem
                       className={getClassName(article)}
                       onTouchTap={()=>{onItemClick(article.id)}}
                       primaryText={this.getTitle(article.body)} />
                    <Divider />
                  </div>)
          }
        )}
      </List>
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ArticleList
