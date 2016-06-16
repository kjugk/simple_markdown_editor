import React, {PropTypes, Component} from 'react'
import TextField from 'material-ui/TextField'
import AddButton from '../components/buttons/AddButton'
import styles from '../styles'

const TagInput = (props) => {
  return (
    <div>
      {props.isEditing &&
        <TextField
          style={{marginLeft: "8px", width: "100px"}}
          underlineFocusStyle={{borderColor: styles.colors.secondary}}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          autoFocus={true}
          />
      }

      {!props.isEditing &&
        <AddButton
          onClick={props.onAddClick}
          disabled={props.isEditing}
          style={{width: "36px", height: "36px", padding: "6px"}}
          />
      }
    </div>
  )
}

TagInput.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired
}

export default TagInput
