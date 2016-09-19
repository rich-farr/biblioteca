import React, { Component } from 'react'
import Book from './book'
import data from '../../db/authors.json'

class AuthorDetail extends React.Component {
  render () {
    let author = data.authors[this.props.params.id - 1]
		return (
			<div>
        <h1>{author.name}</h1>
        {author.books.map(function(book, index) {
          return (
            <div key={index}>
                <Book
                  title = {book.title}
                  year = {book.year}
                  id = {book.id}
                />
            </div>
          )
        })}
			</div>
		)
  }
}

export default AuthorDetail
