import React, {PropTypes, Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  textAlign: "center",
  paddingTop: "20px"
}

const Progress = (props) => {
  return (
    <div style={style}>
      <CircularProgress mode="indeterminate" />
    </div>
  )
}

export default Progress
