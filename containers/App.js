import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render(){
    const { dispatch } = this.props
    return(
      <div>
        Hello, World!!!!
      </div>
    )
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired
}

function foo(state){
  return{
  }
}

export default connect(foo)(App);
