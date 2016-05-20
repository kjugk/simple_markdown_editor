import React, { PropTypes, Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const CreateArticleButton = (props) => {
  return (
    <FloatingActionButton
      style={{position: "fixed", right: "10px", bottom: "10px"}}
      onClick={props.onClick}
      >
      <FontIcon
        className="material-icons"
        color="#fff"
        >
        create
      </FontIcon>
    </FloatingActionButton>
  )
}

CreateArticleButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CreateArticleButton
