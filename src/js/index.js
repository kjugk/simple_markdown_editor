import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

import {configMarked} from './utils/markdown'
import App from './containers/App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ArticleViewer from './containers/ArticleViewer'
import ArticleEditor from './containers/ArticleEditor'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
configMarked()
injectTapEventPlugin()

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ArticleViewer} />
          <Route path="articles/new" component={ArticleEditor} />
          <Route path="articles/:articleId/edit" component={ArticleEditor} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
