import React, { PropTypes, Component } from 'react'
import marked from 'marked'

class ArticleEditor extends Component{
  constructor(props){
    super(props)
    this.state = {body: props.article.body}
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSave(){
    const { article, onSave } = this.props
    onSave(article.id, this.state.body)
  }

  handleChange(){
    const body = this.refs.articleBody.value.trim()
    this.setState({body})
  }

  render(){
    const { article } = this.props

    return(
      <div>
        <div style={{width: "500px", float: "left"}}>
          <input type="button" value="save" onClick={this.handleSave} />
          <textarea ref="articleBody"
                    onChange={this.handleChange}
                    defaultValue={this.state.body} /><br />

          <input type="button" value="save" onClick={this.handleSave} />
        </div>

        <div className="markdown-body" style={{paddingLeft: "10px", width: "500px", overflow: "hidden"}}
             dangerouslySetInnerHTML={{__html: marked(this.state.body)}} />
      </div>
    )
  }
}

ArticleEditor.propTypes = {
  article: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
}

export default ArticleEditor
