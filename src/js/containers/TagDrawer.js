import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import {getAllTags} from '../selectors'
import {selectTag, toggleDrawer} from '../actions/TagActions'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'
import Badge from 'material-ui/Badge'
import styles from '../styles'

class TagDrawer extends Component {
  render(){
    const {open, dispatch, toggleDrawer} = this.props

    return (
      <Drawer
        docked={false}
        open={open}
        onRequestChange={(openDrawer) => {
          dispatch(toggleDrawer())
        }}
        >
        <List>
          {this.renderListItems()}
        </List>
      </Drawer>
    )
  }

  renderListItems(){
    const {allTags, dispatch, selectTag, toggleDrawer} = this.props
    let listItems = [], i = 0

    allTags.forEach((count, t) => {
      listItems.push(
        <ListItem
          key={i++}
          primaryText={t}
          leftIcon={<LocalOffer color="#3D4044" />}
          rightIcon={<Badge badgeStyle={{backgroundColor: styles.colors.primary, color: styles.colors.textInverse}} badgeContent={count} />}
          onTouchTap={()=>{
            dispatch(selectTag(t))
            dispatch(toggleDrawer())
          }}
          />
      )
    })

    return listItems
  }
}

TagDrawer.propTypes = {
  allTags: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  selectTag: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    allTags: getAllTags(state),
    open: state.tag.get('isDrawerOpen'),
    selectTag,
    toggleDrawer
  }
}

export default connect(mapStateToProps)(TagDrawer)
