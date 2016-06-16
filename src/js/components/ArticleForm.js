import React, {PropTypes, Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import styles from '../styles'

const ArticleForm = (props) => {
  return (
    <div style={{padding: "6px 8px"}}>
      <TextField
        fullWidth={true}
        multiLine={true}
        underlineFocusStyle={{borderColor: styles.colors.secondary}}
        hintText="Input here."
        onChange={props.onBodyChange}
        value={props.body}
        />

      <RaisedButton
        style={{width: "100%"}}
        backgroundColor={styles.colors.primary}
        labelStyle={{color: styles.colors.textInverse}}
        label="save"
        disabled={props.body.trim() === ""}
        onClick={props.onSubmit}
        />
    </div>
  )
}

ArticleForm.propTypes = {
  body: PropTypes.string.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ArticleForm
