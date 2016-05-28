import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import {getAllTags} from '../selectors'
import {selectTag, toggleDrawer} from '../actions/TagActions'
import LocalOffer from 'material-ui/svg-icons/maps/local-offer'

class TagDrawer extends Component {
  render(){
    return (
      <Drawer
        docked={false}
        open={this.props.open}
        onRequestChange={(openDrawer) => {
          this.props.dispatch(toggleDrawer())
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
                  this.props.dispatch(selectTag(t))
                  this.props.dispatch(toggleDrawer())
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
  tags: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  selectTag: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    tags: getAllTags(state),
    open: state.tag.isDrawerOpen,
    selectTag,
    toggleDrawer
  }
}

export default connect(mapStateToProps)(TagDrawer)
