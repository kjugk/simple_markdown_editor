import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {hideMessage} from '../actions/MessageActions'
import Snackbar from 'material-ui/Snackbar'

class GlobalMessage extends Component {
  constructor(props){
    super(props)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  render(){
    const {message} = this.props

    return (
      <Snackbar
        open={message.show}
        message={message.message}
        autoHideDuration={3000}
        onRequestClose={this.handleRequestClose}
        />
    )
  }

  handleRequestClose(){
    const {dispatch, hideMessage} = this.props

    dispatch(hideMessage())
  }
}

GlobalMessage.propTypes = {
  message: PropTypes.object.isRequired,
  hideMessage: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    message: state.message,
    hideMessage
  }
}

export default connect(mapStateToProps)(GlobalMessage)
