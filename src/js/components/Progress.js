import React, {PropTypes, Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import styles from '../styles'

const Progress = (props) => {
  return (
    <div className="progress">
      <CircularProgress mode="indeterminate" color={styles.colors.secondary} />
    </div>
  )
}

export default Progress
