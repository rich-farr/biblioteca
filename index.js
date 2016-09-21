import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './client/reducers/reducer'
import routes from './client/components/routes'
import domready from 'domready'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('main')
)

console.log('welcome to biblioteca')
