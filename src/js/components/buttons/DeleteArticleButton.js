import React, { PropTypes, Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import Delete from 'material-ui/svg-icons/action/delete'

const DeleteArticleButton = (props) => {
  return (
    <IconButton tooltip="edit" iconStyle={{width: 24, height: 24}} style={{width: 24, height: 24, padding: "8px 0"}} onClick={props.onClick}>
      <SvgIcon>
        <Delete />
      </SvgIcon>
    </IconButton>
  )
}

DeleteArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteArticleButton
