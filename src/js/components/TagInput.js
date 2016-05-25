import React, {PropTypes, Component} from 'react'
import TextField from 'material-ui/TextField'
import AddButton from '../components/buttons/AddButton'

const TagInput = (props) => {
  return (
    <div>
      {props.isEditing &&
        <TextField
          name="hoge"
          style={{width: "100px", height: "34px"}}
          textareaStyle={{fontSize: "0.9em"}}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
          autoFocus={true}
          />
      }

      <AddButton
        onClick={props.onAddClick}
        disabled={props.isEditing}
        style={{width: "36px", height: "36px", padding: "6px"}}
        />
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
