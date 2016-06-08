import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {initForm, changeBody, submit, clearForm} from '../actions/ArticleFormActions'
import ArticleForm from '../components/ArticleForm'
import ArticlePreview from '../components/ArticlePreview'
import TagForm from '../containers/TagForm'

class ArticleEditor extends Component{
  constructor(props){
    super(props)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    const { params, dispatch, initForm} = this.props

    if(!!params.articleId){
      dispatch(initForm(params.articleId))
    }
  }

  componentDidUpdate(){
    if(this.props.articleForm.get('isSubmitComplete')){
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
        <div className="fullHeight col-xs-6 no-gutter" style={{borderRight: "1px solid #EEE"}}>
          <TagForm />

          <ArticleForm
            body={articleForm.get('body')}
            onBodyChange={this.handleBodyChange}
            onSubmit={this.handleSubmit}
            />
        </div>

        <div className="col-xs-6 no-gutter">
          <ArticlePreview articleBody={articleForm.get('body')} />
        </div>
      </div>
    )
  }

  handleSubmit(e){
    e.stopPropagation()

    const { dispatch, submit, articleForm } = this.props
    dispatch(submit(articleForm.get('id'), articleForm.get('body'), articleForm.get('tags')))
  }

  handleBodyChange(e){
    e.stopPropagation()

    const { dispatch, changeBody } = this.props
    dispatch(changeBody(e.target.value))
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
