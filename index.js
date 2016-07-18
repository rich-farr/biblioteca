import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import domready from 'domready'

domready(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('main')
  )
})
console.log('welcome to biblioteca')
