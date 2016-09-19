import React, { Component } from 'react'
import Book from './book'
import data from '../../db/books.json'

var randomBook = data.books[Math.floor(Math.random() * data.books.length)]

class RandomBook extends React.Component {

  render () {
    return (
    	<div className="books">
  			<Book
  				title = {randomBook.title}
  				author = {randomBook.author}
  				year = {randomBook.year}
  				image = {randomBook.image}
  				id = {randomBook.id}
  			/>
    	</div>
    )
  }
}

export default RandomBook
