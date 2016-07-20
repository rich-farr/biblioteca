import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Books from './components/books'
import Authors from './components/authors'
import RandomBook from './components/randombook'
import BookDetail from './components/bookdetail'
import AuthorDetail from './components/authordetail'
import domready from 'domready'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

domready(() => {
  ReactDOM.render((
  	<Router history={browserHistory}>
	    <Route path='/' component={App}>
        <IndexRoute component={RandomBook}/>
  	    <Route path='/books' component={Books}/>
    	    <Route path='/books/:id' component={BookDetail}/>
        <Route path='/authors' component={Authors}/>
          <Route path='/authors/:id' component={AuthorDetail}/>
      </Route>
    </Router>
    ),
    document.querySelector('main')
  )
})
console.log('welcome to biblioteca')
