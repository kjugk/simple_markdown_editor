import React, { PropTypes, Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  textAlign: "center",
  paddingTop: "20px"
}

const Progress = (props) => {
  if(!props.visible){ return null }

  return (
    <div style={style}>
      <CircularProgress mode="indeterminate" />
    </div>
  )
}

Progress.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default Progress
