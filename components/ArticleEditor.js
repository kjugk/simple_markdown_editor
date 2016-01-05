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
      <div style={{padding: "5px"}}>
        <div style={{height: "100%", width: "50%", float: "left",paddingRight: "5px", borderRight: "1px solid #EEE"}}>
          <TextField ref="articleBody"
                     fullWidth={true}
                     multiLine={true}
                     hintText="最初の行がタイトルになればいいのに"
                     onChange={this.handleChange}
                     defaultValue={this.state.body} />

          <RaisedButton primary={true}
                        label="save"
                        onTouchTap={this.handleSave} />
        </div>

        <div className="markdown-body"
             style={{paddingLeft: "10px", overflow: "hidden"}}
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
