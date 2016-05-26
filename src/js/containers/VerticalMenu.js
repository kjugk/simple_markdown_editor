import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {deleteArticle} from '../actions/ArticleActions'
import {selectTag} from '../actions/TagActions'
import CreateArticleButton from '../components/buttons/CreateArticleButton'
import EditArticleButton from '../components/buttons/EditArticleButton'
import DeleteArticleButton from '../components/buttons/DeleteArticleButton'
import TagButton from '../components/buttons/TagButton'
import Tag from '../components/Tag'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import {List, ListItem} from 'material-ui/List'
import {getAllTags} from '../selectors'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'
import styles from '../components/styles'

class VerticalMenu extends Component {
  constructor(props){
    super(props)
    this.state = {openDrawer: false}
  }

  handleCreateClick(){
    hashHistory.push('articles/new')
  }

  handleEditClick(){
    hashHistory.push(`articles/${this.props.articles.selectedId}/edit`)
  }

  handleDeleteClick(){
    this.props.dispatch(this.props.deleteArticle(this.props.articles.selectedId))
  }

  handleToggleDrawer(){
    this.setState({openDrawer: !this.state.openDrawer})
  }

  render(){
    const{articles} = this.props

    return(
      <div>
        <div
          style={{
            float: "left",
            textAlign: "center",
            borderRight: "1px solid #eeeeee"
          }}
          className="vertical-menu fullHeight"
          >

          <div>
            <CreateArticleButton
              onClick={this.handleCreateClick.bind(this)}
              style={styles.small}
              iconStyle={styles.smallIcon}
              />
          </div>
          <div>
            <EditArticleButton
              disabled={articles.selectedId === null}
              onClick={this.handleEditClick.bind(this)}
              />
          </div>
          <div>
            <DeleteArticleButton
              disabled={articles.selectedId === null}
              onClick={this.handleDeleteClick.bind(this)}
              />
          </div>
          <div>
            <TagButton
              disabled={this.props.tags.length <= 0}
              onClick={this.handleToggleDrawer.bind(this)}
              />
          </div>
        </div>

        <Drawer
          docked={false}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => {
            this.setState({openDrawer})
          }}
          >
          <List>
            {this.props.tags.map((t, i)=>{
              return(
                <ListItem
                  key={i}
                  primaryText={t}
                  leftIcon={<LocalOffer/>}
                  onTouchTap={() => {this.setState({openDrawer: false}); this.props.dispatch(selectTag(t)) }}
                  />
              )
            })}
          </List>
        </Drawer>
      </div>
    )
  }
}

VerticalMenu.propTypes = {
  articles: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    articles: state.articles,
    tags: getAllTags(state),
    deleteArticle
  }
}

export default connect(mapStateToProps)(VerticalMenu)
