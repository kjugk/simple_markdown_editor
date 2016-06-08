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
  const {items, selectedId, onItemClick} = props

  return items.map(item => {
    return (
      <div key={item.id}>
        <ListItem
          className={`article-list-item ${getClassName(item, selectedId)}`}
          primaryText={getTitle(item.body)}
          secondaryText={
            <div style={{fontSize: "12px"}}>
              {moment(item.updatedAt).format('YYYY/MM/DD HH:mm')}
            </div>
          }
          onClick={()=>{
            onItemClick(item.id)
          }}
          />
        <Divider />
      </div>
    )
  })
}

const getTitle = (body) => {
  let title = body.split(/\n/)[0]
  return title ? title : "未設定"
}

const getClassName = (item, selectedId) => {
  return item.id === selectedId ? "selected" : ""
}

ArticleList.propTypes = {
  selectedId: PropTypes.string,
  items: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ArticleList
