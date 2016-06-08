import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import {getAllTags} from '../selectors'
import {selectTag, toggleDrawer} from '../actions/TagActions'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'

class TagDrawer extends Component {
  render(){
    const {open, dispatch, selectTag, selectDrawer} = this.props

    return (
      <Drawer
        docked={false}
        open={open}
        onRequestChange={(openDrawer) => {
          dispatch(toggleDrawer())
        }}
        >
        <List>
          {this.props.tags.map((t, i)=>{
            return(
              <ListItem
                key={i}
                primaryText={t}
                leftIcon={<LocalOffer color="#000000"/>}
                onTouchTap={()=>{
                  dispatch(selectTag(t))
                  dispatch(toggleDrawer())
                }}
                />
            )
          })}
        </List>
      </Drawer>
    )
  }
}

TagDrawer.propTypes = {
  tags: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  selectTag: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    tags: getAllTags(state),
    open: state.tag.get('isDrawerOpen'),
    selectTag,
    toggleDrawer
  }
}

export default connect(mapStateToProps)(TagDrawer)
