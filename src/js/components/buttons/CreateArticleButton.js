import React, { PropTypes, Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import AddCircle from 'material-ui/svg-icons/content/add-circle'

const CreateArticleButton = (props) => {
  return (
    <IconButton iconStyle={{width: 48, height: 48}} style={{width: 48, height: 48, padding: "8px 0"}} onClick={props.onClick}>
      <SvgIcon>
        <AddCircle color="#FFFFFF" />
      </SvgIcon>
    </IconButton>
  )
}

CreateArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CreateArticleButton
