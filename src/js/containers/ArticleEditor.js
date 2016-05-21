import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { initForm, changeBody, submit, clearForm } from '../actions/ArticleFormActions'
import ArticleForm from '../components/ArticleForm'
import ArticlePreview from '../components/ArticlePreview'

class ArticleEditor extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
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
      <div className="fullHeight">
        <div className="fullHeight col-xs-6 no-gutter" style={{padding: "0 8px", borderRight: "1px solid #EEE"}}>
          <ArticleForm
            form={articleForm}
            onBodyChange={this.handleBodyChange}
            onSubmit={this.handleSubmit}
            />
        </div>

        <div className="col-xs-6 no-gutter">
          <ArticlePreview articleBody={articleForm.body} />
        </div>
      </div>
    )
  }

  handleSubmit(e){
    e.stopPropagation()
    this.props.dispatch(this.props.submit(this.props.articleForm.id, this.props.articleForm.body))
  }

  handleBodyChange(e){
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
