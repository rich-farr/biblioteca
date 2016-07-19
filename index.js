import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import domready from 'domready'
import { Router, Route, hashHistory } from 'react-router'

domready(() => {
  ReactDOM.render((
  	<Router history={hashHistory}>
	    <Route path='/' component={App} />
    </Router>
    ),
    document.querySelector('main')
  )
})
console.log('welcome to biblioteca')
