import React, {PropTypes, Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const ArticleForm = (props) => {
  return (
    <div style={{padding: "6px 8px"}}>
      <TextField
        fullWidth={true}
        multiLine={true}
        hintText="1行目はタイトルです"
        hintStyle={{fontSize: "0.9em"}}
        onChange={props.onBodyChange}
        value={props.form.body}
        />

      <RaisedButton
        className="fullWidth"
        primary={true}
        label="save"
        disabled={props.form.body.trim() === ""}
        onClick={props.onSubmit}
        />
    </div>
  )
}

ArticleForm.propTypes = {
  form: PropTypes.object.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ArticleForm
