import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import AddCircle from 'material-ui/svg-icons/content/add-circle'

const CreateArticleButton = (props) => {
  return (
    <IconButton
      iconStyle={props.iconStyle}
      style={props.style}
      onClick={props.onClick}
      >
      <SvgIcon>
        <AddCircle color="rgb(0, 188, 212)"/>
      </SvgIcon>
    </IconButton>
  )
}

CreateArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  iconStyle: PropTypes.object
}

CreateArticleButton.defaultProps = {
  style: {},
  iconStyle: {}
}

export default CreateArticleButton
