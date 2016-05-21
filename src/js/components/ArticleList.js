import React, { PropTypes, Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const ArticleList = (props) => {
  return(
    <List style={{paddingTop: "0px"}}>
      {renderListItems(props)}
    </List>
  )
}

const renderListItems = (props) => {
  return props.articles.items.map(item => {
    return (
      <div style={{overflow: "hidden"}} key={item.id}>
        <ListItem
          className={getClassName(item, props.articles.selectedId)}
          onClick={()=>{props.onItemClick(item.id)}}
          primaryText={renderTitle(item.body)} />
        <Divider />
      </div>
    )
  })
}

const renderTitle = (body) => {
  let title = body.split(/\n/)[0]
  return title ? title : "未設定"
}

const getClassName = (item, selectedId) => {
  let name = "article-list-item"
  if(item.id === selectedId){
    return `${name} selected`
  }
  return name
}

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ArticleList
