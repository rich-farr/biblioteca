import React, { Component } from 'react'
import data from '../db/books.json'
import { Link } from 'react-router'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
  }

  handleChange(event) {
    this.setState({searchString: event.target.value})
  }

  render() {

    let books = data.books,
        searchString = this.state.searchString.trim().toLowerCase()

    if (searchString.length > 0) {
      books = books.filter((book) => {
        return book.title.toLowerCase().match( searchString )
      })
    } else {
      books = []
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Search here" />
          {books.map((book, index) => {
            let linkTo = "/books/" + book.id
            return <div key={index}>
              <Link to={linkTo}>{book.title}</Link>
            </div>
          })}
      </div>
    )
  }

}

export default Search