import React, { PropTypes, Component } from 'react'
import marked from 'marked'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button';

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

  handleChange(e){
    e.stopPropagation()
    e.preventDefault()
    const body = this.refs.articleBody.getValue().trim()
    this.setState({body})
  }

  render(){
    const { article } = this.props
    return(
      <div>
        <div style={{width: "500px", float: "left"}}>
          <TextField ref="articleBody"
                     fullWidth={true}
                     multiLine={true}
                     rows={2}
                     hintText="First line is title."
                     onChange={this.handleChange}
                     defaultValue={this.state.body} />

          <RaisedButton primary={true}
                        label="save"
                        onTouchTap={this.handleSave} />
        </div>

        <div className="markdown-body"
             style={{paddingLeft: "10px", width: "500px", overflow: "hidden"}}
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
