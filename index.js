import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Books from './components/books'
import Authors from './components/authors'
import domready from 'domready'
import { Router, Route, hashHistory } from 'react-router'

domready(() => {
  ReactDOM.render((
  	<Router history={hashHistory}>
	    <Route path='/' component={App} />
	    <Route path='/books' component={Books} />
	    <Route path='/authors' component={Authors} />
    </Router>
    ),
    document.querySelector('main')
  )
})
console.log('welcome to biblioteca')
