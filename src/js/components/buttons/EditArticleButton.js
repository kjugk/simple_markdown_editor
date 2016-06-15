import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import Edit from 'material-ui/svg-icons/image/edit'
import styles from '../styles'

const EditArticleButton = (props) => {
  let color = props.disabled ? "grey" : "#000000"

  return (
    <div>
      <IconButton
        disabled={props.disabled}
        iconStyle={props.iconStyle}
        style={props.style}
        onClick={props.onClick}
        >
        <SvgIcon>
          <Edit color={color} />
        </SvgIcon>
      </IconButton>
      <div style={{...styles.buttonLabel, color}}>edit</div>
    </div>
  )
}

EditArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  iconStyle: PropTypes.object
}

EditArticleButton.defaultProps = {
  disabled: false,
  style: {},
  iconStyle: {}
}

export default EditArticleButton
