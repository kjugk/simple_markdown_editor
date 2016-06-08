import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {addTag, deleteTag} from '../actions/ArticleFormActions'
import styles from '../components/styles'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'
import Tag from '../components/Tag'
import TagInput from '../components/TagInput'

class TagForm extends Component {
  constructor(props){
    super(props)
    this.state = {isEditing: false}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }

  render(){
    return (
      <section
        style={{minHeight: "50px", paddingLeft: "8px", borderBottom: "1px solid #EEEEEE"}}
        className="flex-container flex-align-center flex-wrap"
        >
        <LocalOffer />

        {this.props.tags.map((tag, i) => {
          return(
            <Tag
              key={i}
              value={tag}
              onDeleteClick={this.handleDelete}
              />
          )
        })}

        <TagInput
          isEditing={this.state.isEditing}
          onBlur={this.handleBlur}
          onKeyDown={this.handleChange}
          onAddClick={this.handleAddClick}
          />
      </section>
    )
  }

  submit(v){
    const {dispatch, addTag} = this.props
    if(v){
      dispatch(addTag(v))
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
    const {dispatch, deleteTag} = this.props
    dispatch(deleteTag(tag))
  }
}

TagForm.propTypes = {
  tags: PropTypes.object.isRequired,
  addTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    tags: state.articleForm.get('tags'),
    addTag,
    deleteTag
  }
}

export default connect(mapStateToProps)(TagForm)
