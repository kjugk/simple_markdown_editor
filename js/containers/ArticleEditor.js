import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button';
import ArticlePreview from '../components/ArticlePreview'
import { getSelectedArticle } from '../reducers/articles.js'
import { updateArticle, cancelEdit } from '../actions/articles'

class ArticleEditor extends Component{
  constructor(props){
    super(props)
    this.state = { body: props.article.body }

    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSave(){
    const { article, updateArticle, dispatch } = this.props
    dispatch(updateArticle(article.id, this.state.body));
  }

  handleBack(){
    const { cancelEdit, dispatch } = this.props
    dispatch(cancelEdit());
  }

  handleChange(e){
    e.stopPropagation()
    const body = this.refs.articleBody.getValue()

    this.setState({body})
  }

  render(){
    const { article, dispatch } = this.props

    return(
      <div style={{padding: "5px"}}>
        <div style={{height: "100%", width: "50%", float: "left",paddingRight: "5px", boxSizing: "border-box", borderRight: "1px solid #EEE"}}>
          <TextField ref="articleBody"
                     fullWidth={true}
                     multiLine={true}
                     hintText="1行目はタイトル"
                     onChange={this.handleChange}
                     defaultValue={this.state.body} />

          <RaisedButton primary={true}
                        label="save"
                        onTouchTap={this.handleSave} />

          <RaisedButton label="back"
                        onTouchTap={this.handleBack.bind(this)} />
        </div>

        <div style={{overflow: 'hidden'}}>
          <ArticlePreview articleBody={this.state.body} />
        </div>
      </div>
    )
  }
}

ArticleEditor.propTypes = {
  article: PropTypes.object.isRequired,
  updateArticle: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    article: getSelectedArticle(state),
    updateArticle,
    cancelEdit
  }
}

export default connect(mapStateToProps)(ArticleEditor);
