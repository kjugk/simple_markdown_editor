import React, { PropTypes, Component } from 'react'
import CircularProgress from 'material-ui/lib/circular-progress';

class AppProgress extends Component{
  render(){
    if(!this.props.visible){ return null }

    return(
      <div style={{textAlign: "center", paddingTop: "20px"}}>
        <CircularProgress mode="indeterminate" color="#ff4081" />
      </div>
    )
  }
}

AppProgress.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default AppProgress
