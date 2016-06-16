import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import styles from '../../styles'

const CreateArticleButton = (props) => {
  return (
    <IconButton
      iconStyle={props.iconStyle}
      style={props.style}
      onClick={props.onClick}
      >
      <SvgIcon>
        <AddCircle color={styles.colors.primary}/>
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
