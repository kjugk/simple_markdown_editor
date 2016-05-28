import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import Delete from 'material-ui/svg-icons/action/delete'

const DeleteArticleButton = (props) => {
  let color = props.disabled ? "grey" : "#000000"

  return (
    <IconButton
      disabled={props.disabled}
      iconStyle={props.iconStyle}
      style={props.style}
      onClick={props.onClick}
      >
      <SvgIcon>
        <Delete color={color} />
      </SvgIcon>
    </IconButton>
  )
}

DeleteArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  iconStyle: PropTypes.object
}
DeleteArticleButton.defaultProps = {
  disabled: false,
  style: {},
  iconStyle: {}
}

export default DeleteArticleButton
