import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import Add from 'material-ui/svg-icons/content/add'

const AddButton = (props) => {
  let color = props.disabled ? "#EEEEEE" : "rgb(0, 188, 212)"

  return (
    <IconButton
      iconStyle={props.iconStyle}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
      >
      <SvgIcon>
        <Add color={color} />
      </SvgIcon>
    </IconButton>
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  iconStyle: PropTypes.object,
  disabled: PropTypes.bool
}

AddButton.defaultProps = {
  style: {},
  iconStyle: {},
  disabled: false
}

export default AddButton
