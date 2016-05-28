import React, {PropTypes, Component} from 'react'
import Cancel from 'material-ui/svg-icons/navigation/cancel'

const Tag = (props) => {
  return (
    <div onClick={props.onClick} style={{marginRight: "5px"}} className="label label-info">
      <span>{props.value}</span>

      {props.deletable &&
        <Cancel
          color="#FFFFFF"
          style={{verticalAlign: "middle", width: "14px", height: "14px", marginLeft: "5px"}}
          onClick={() => {
            props.onDeleteClick(props.value)
          }}
          />
      }
    </div>
  )
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  deletable: PropTypes.bool,
  onClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

Tag.defaultProps = {
  deletable: true,
  onClick: ()=>{},
  onDeleteClick: ()=>{}
}

export default Tag
