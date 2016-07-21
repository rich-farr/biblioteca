import React, { Component } from 'react'
import data from '../db/books.json'

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

    if(searchString.length > 0) {
      books = books.filter((book) => {
        return book.title.toLowerCase().match( searchString )
      })
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Search here" />
          {books.map((book, index) => {
            return <div key={index}>
              {book.title}
            </div>
          })}
      </div>
    )
  }

}

export default Search
