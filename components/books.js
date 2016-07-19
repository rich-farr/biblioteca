import React, { Component } from 'react'
import reactDom from 'react-dom'
import Book from './book'
import data from '../db/db.json'

const books = data.books

class Books extends React.Component {

  render () {
    return (
    	<div className="books">
    		{books.map(function(book, index) {
    			return (
    				<div key={index}>
	    				<Book
	    					title = {book.title}
	    					author = {book.author}
	    					year = {book.year}
	    					image = {book.image}
	    					/>
    				</div>
    			)
    		})}
    	</div>
    )
  }

}

export default Books
