import React, { PropTypes, Component } from 'react'

import ArticleList from '../components/ArticleList'
import ArticlePreview from '../components/ArticlePreview'
import ArticleControll from './ArticleControll'
import RaisedButton from 'material-ui/lib/raised-button';

class ArticleViewer extends Component{
  render(){
    const{ articles, selectedArticle, onSelect, onCreate, onEdit, onDelete } = this.props

    return(
      <div>
        <div className="article-list-area">
          <div style={{borderBottom: "1px solid #EEE", padding: "10px"}}>
            <RaisedButton label="create"
                          fullWidth={true}
                          primary={true}
                          onTouchTap={onCreate} />
          </div>
          <ArticleList articles={articles}
                       onItemClick={onSelect} />
        </div>

        <div className="article-preview-area">
          { selectedArticle &&
            <div>
              <ArticleControll article={selectedArticle}
                               onEdit={onEdit}
                               onDelete={onDelete} />

              <ArticlePreview articleBody={selectedArticle.body} />
            </div>
          }
        </div>
      </div>
    )
  }
}

ArticleViewer.propTypes = {
  articles: PropTypes.object.isRequired,
  selectedArticle: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ArticleViewer
