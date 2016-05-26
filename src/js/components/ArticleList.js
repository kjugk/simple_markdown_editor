import React, {PropTypes, Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import moment from 'moment'

const ArticleList = (props) => {
  return(
    <List style={{paddingTop: "0px"}}>
      {renderListItems(props)}
    </List>
  )
}

const renderListItems = (props) => {
  return props.items.map(item => {
    return (
      <div key={item.id}>
        <ListItem
          className={getClassName(item, props.selectedId)}
          onClick={()=>{props.onItemClick(item.id)}}
          primaryText={renderTitle(item.body)}
          secondaryText={<span style={{fontSize: "12px"}}>{moment(item.updatedAt).format('YYYY/MM/DD HH:mm')}</span>}
          />
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
  selectedId: PropTypes.string,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ArticleList
