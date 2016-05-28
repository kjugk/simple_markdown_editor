import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {initForm, changeBody, submit, clearForm} from '../actions/ArticleFormActions'
import ArticleForm from '../components/ArticleForm'
import ArticlePreview from '../components/ArticlePreview'
import TagForm from '../containers/TagForm'
import {getSelectedArticle} from '../selectors'

class ArticleEditor extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
  }

  componentDidMount(){
    const { params, dispatch, initForm} = this.props
    if(!!params.articleId){
      dispatch(initForm(params.articleId))
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
        <div className="fullHeight col-xs-6 no-gutter" style={{borderRight: "1px solid #EEE"}}>
          <TagForm />

          <ArticleForm
            form={articleForm}
            onBodyChange={this.handleBodyChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
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

    const { dispatch, submit, articleForm } = this.props
    dispatch(submit(articleForm.id, articleForm.body, articleForm.tags))
  }

  handleBodyChange(e){
    e.stopPropagation()

    const { dispatch, changeBody } = this.props
    dispatch(changeBody(e.target.value))
  }
}

ArticleEditor.propTypes = {
  selectedArticle: PropTypes.object.isRequired,
  articleForm: PropTypes.object.isRequired,
  initForm: PropTypes.func.isRequired,
  changeBody: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    selectedArticle: getSelectedArticle(state),
    articleForm: state.articleForm,
    initForm,
    changeBody,
    submit,
    clearForm
  }
}

export default connect(mapStateToProps)(ArticleEditor);
