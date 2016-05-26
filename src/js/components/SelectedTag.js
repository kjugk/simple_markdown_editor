import React, {PropTypes, Component} from 'react'
import Tag from './Tag'

const SelectedTag = (props) => {
  if(props.tag === ""){
    return null

  } else {
    return (
      <div style={{padding: "6px 8px", borderBottom: "1px solid #EEE"}}>
        <Tag
          value={props.tag}
          onDeleteClick={props.onDeleteClick}
          />
      </div>
    )
  }
}

SelectedTag.propTypes = {
  tag: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default SelectedTag
