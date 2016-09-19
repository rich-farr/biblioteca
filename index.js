import React from 'react'
import ReactDOM from 'react-dom'
import App from './client/components/app'
import Books from './client/components/books'
import Authors from './client/components/authors'
import RandomBook from './client/components/randombook'
import BookDetail from './client/components/bookdetail'
import AuthorDetail from './client/components/authordetail'
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
