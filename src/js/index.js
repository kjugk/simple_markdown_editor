import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import {configMarked} from './lib/markdown'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App'
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
