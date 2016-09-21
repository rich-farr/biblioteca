import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './app'
import Books from './books'
import Authors from './authors'
import RandomBook from './randombook'
import BookDetail from './bookdetail'
import AuthorDetail from './authordetail'

export default (
	<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={RandomBook}/>
	    <Route path='/books' component={Books}/>
  	    <Route path='/books/:id' component={BookDetail}/>
      <Route path='/authors' component={Authors}/>
        <Route path='/authors/:id' component={AuthorDetail}/>
    </Route>
  </Router>
)
