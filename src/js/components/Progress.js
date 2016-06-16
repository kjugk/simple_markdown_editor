import React, {PropTypes, Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const Progress = (props) => {
  return (
    <div className="progress">
      <CircularProgress mode="indeterminate" />
    </div>
  )
}

export default Progress
