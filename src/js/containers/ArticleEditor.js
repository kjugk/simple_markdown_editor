import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { initForm, changeBody, submit, clearForm } from '../actions/ArticleFormActions'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ArticlePreview from '../components/ArticlePreview'

class ArticleEditor extends Component{
  constructor(props){
    super(props)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    if(!!this.props.params.articleId){
      this.props.dispatch(this.props.initForm(this.props.params.articleId))
    }
  }

  componentDidUpdate(){
    if(this.props.articleForm.isSubmitComplete){
      hashHistory.push('/')
    }
  }

  componentWillUnmount(){
    this.props.dispatch(this.props.clearForm())
  }

  render(){
    const { articleForm, dispatch } = this.props

    return(
      <div className="fullHeight" style={{borderTop: "1px solid #EEE"}}>
        <div className="fullHeight col-xs-6 no-gutter" style={{padding: "0 8px", borderRight: "1px solid #EEE"}}>
          <TextField
            fullWidth={true}
            multiLine={true}
            hintText="1行目はタイトルです"
            onChange={this.handleChange}
            value={articleForm.body}
            />

          <RaisedButton
            primary={true}
            label="save"
            disabled={articleForm.body === ""}
            onClick={this.handleSave}
            />
        </div>

        <div className="col-xs-6 no-gutter">
          <ArticlePreview articleBody={articleForm.body} />
        </div>
      </div>
    )
  }

  handleSave(e){
    e.stopPropagation()
    this.props.dispatch(this.props.submit(this.props.articleForm.id, this.props.articleForm.body))
  }

  handleChange(e){
    e.stopPropagation()
    this.props.dispatch(this.props.changeBody(e.target.value))
  }
}

ArticleEditor.propTypes = {
  articleForm: PropTypes.object.isRequired,
  initForm: PropTypes.func.isRequired,
  changeBody: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    articleForm: state.articleForm,
    initForm,
    changeBody,
    submit,
    clearForm
  }
}

export default connect(mapStateToProps)(ArticleEditor);
