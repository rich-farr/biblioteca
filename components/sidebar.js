import React, { Component } from 'react'
import Search from './search'
import bookData from '../db/books.json'
import authorData from '../db/authors.json'

var books = bookData.books
var authors = authorData.authors

class Sidebar extends React.Component {

  render () {
    return (
    	<div id="sidebar" className="pure-u-1-4">
        <Search />
    	</div>
    	)
  }

}

export default Sidebar
