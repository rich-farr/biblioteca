import React, { Component } from 'react'
import Book from './book'
import data from '../db/books.json'

class BookDetail extends React.Component {
  render () {
    let book = data.books[this.props.params.id - 1]
		return (
			<div>
				<Book
					title = {book.title}
					author = {book.author}
					year = {book.year}
					image = {book.image}
					id = {book.id}
				/>
			</div>
		)
  }
}

export default BookDetail
