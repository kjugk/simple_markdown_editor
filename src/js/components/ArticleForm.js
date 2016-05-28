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
        value={props.body}
        />

      <RaisedButton
        className="fullWidth"
        primary={true}
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
