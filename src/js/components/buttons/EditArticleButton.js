import React, { PropTypes, Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import Edit from 'material-ui/svg-icons/image/edit'

const EditArticleButton = (props) => {
  let color = props.disabled ? "grey" : "#000000"

  return (
    <IconButton
      disabled={props.disabled}
      iconStyle={{width: 24, height: 24}}
      style={{width: 24, height: 24, padding: "8px 0"}}
      onClick={props.onClick}
      >
      <SvgIcon>
        <Edit color={color} />
      </SvgIcon>
    </IconButton>
  )
}

EditArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default EditArticleButton
