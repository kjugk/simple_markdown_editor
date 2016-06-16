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
    this.state = {viewHeight: 0}
    this.handleResize = this.handleResize.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleResize(e) {
    this.setState({viewHeight: window.innerHeight - this.refs.viewer.offsetTop})
  }

  componentDidMount(){
    const { params, dispatch, initForm} = this.props

    if(!!params.articleId){
      dispatch(initForm(params.articleId))
    }
    this.setState({viewHeight: window.innerHeight - this.refs.viewer.offsetTop})
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(){
    if(this.props.articleForm.get('isSubmitComplete')){
      hashHistory.push('/')
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
    this.props.dispatch(this.props.clearForm())
  }

  render(){
    const { articleForm, dispatch } = this.props

    return(
      <div ref="viewer" style={{height: this.state.viewHeight}}>
        <div className="fullHeight col-xs-6 no-gutter" style={{borderRight: "1px solid #EEE", overflow: "scroll"}}>
          <TagForm />

          <ArticleForm
            body={articleForm.get('body')}
            onBodyChange={this.handleBodyChange}
            onSubmit={this.handleSubmit}
            />
        </div>

        <div className="col-xs-6 no-gutter fullHeight">
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
