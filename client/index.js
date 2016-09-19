import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './components/routes'
import domready from 'domready'

const reactRoot = document.querySelector('main')

domready(() => {
  ReactDOM.render((
    <Provider store={store}>
      {routes}
    </Provider>,
    reactRoot
    ),
    document.querySelector('main')
  )
})

console.log('welcome to biblioteca')
