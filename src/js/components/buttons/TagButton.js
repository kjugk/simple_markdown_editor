import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'
import styles from '../../styles'

const TagButton = (props) => {
  let color = props.disabled ? "grey" : styles.colors.textBase

  return (
    <div>
      <IconButton
        disabled={props.disabled}
        iconStyle={props.iconStyle}
        style={props.style}
        onClick={props.onClick}
        >
        <SvgIcon>
          <LocalOffer color={color} />
        </SvgIcon>
      </IconButton>
      <div style={{...styles.button.buttonLabel, color}}>tags</div>
    </div>
  )
}

TagButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  iconStyle: PropTypes.object
}

TagButton.defaultProps = {
  disabled: false,
  style: {},
  iconStyle: {}
}

export default TagButton
