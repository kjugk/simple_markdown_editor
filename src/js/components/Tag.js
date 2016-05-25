import React, {PropTypes, Component} from 'react'
import Cancel from 'material-ui/svg-icons/navigation/cancel'

const Tag = (props) => {
  return (
    <div style={{margin: "0 5px"}} className="label label-info">
      <span>{props.value}</span>
      <Cancel
        color="#FFFFFF"
        style={{verticalAlign: "middle", width: "14px", height: "14px", marginLeft: "5px"}}
        onClick={()=>{props.onDeleteClick(props.value)}}
        />
    </div>
  )
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func
}

export default Tag
