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

//this clears the search box when a search result link is clicked
  clickLink() {
    this.setState({searchString: ''})
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
      <div id="search-bar">
        <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Search here" />
          <div id="dropdown">
            {books.map((book, index) => {
              let linkTo = "/books/" + book.id
              return <div className="search-result" key={index}>
                <Link to={linkTo} onClick={this.clickLink.bind(this)}>{book.title}</Link>
              </div>
            })}
          </div>
      </div>
    )
  }

}

export default Search
