import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {configMarked} from './utils/markdown'
import App from './containers/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

const store = configureStore()
configMarked()
injectTapEventPlugin()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
