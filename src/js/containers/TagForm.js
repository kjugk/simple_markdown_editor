import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {submitTag, deleteTag} from '../actions/ArticleFormActions'
import styles from '../components/styles'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'
import Tag from '../components/Tag'
import TagInput from '../components/TagInput'

class TagForm extends Component {
  constructor(props){
    super(props)
    this.state = {isEditing: false}
  }

  render(){
    return (
      <section
        style={{height: "48px", paddingLeft: "8px", borderBottom: "1px solid #EEEEEE"}}
        className="flex-container flex-align-center flex-wrap"
        >
        <LocalOffer />

        {this.props.tags.map((tag, i) => {
          return(
            <Tag
              key={i}
              value={tag}
              onDeleteClick={this.handleDelete.bind(this)}
              />
          )
        })}

        <TagInput
          isEditing={this.state.isEditing}
          onBlur={this.handleBlur.bind(this)}
          onKeyDown={this.handleChange.bind(this)}
          onAddClick={this.handleAddClick.bind(this)}
          />
      </section>
    )
  }

  submit(v){
    if(v !== ""){
      this.props.dispatch(this.props.submitTag(v))
    }
    this.setState({isEditing: false})
  }

  handleAddClick(){
    this.setState({isEditing: true})
  }

  handleChange(e){
    //enter, tag, esc かつ、valueが存在している場合のみ、actionを呼び出す
    if(e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 9 || e.keyCode === 27){
      e.preventDefault()
      this.submit(e.target.value.trim())
    }
  }

  handleBlur(e){
    this.submit(e.target.value.trim())
  }

  handleDelete(tag){
    this.props.dispatch(this.props.deleteTag(tag))
  }
}

TagForm.propTypes = {
  tags: PropTypes.array.isRequired,
  submitTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    tags: state.articleForm.tags,
    submitTag,
    deleteTag
  }
}

export default connect(mapStateToProps)(TagForm)
