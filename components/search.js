import React, { Component } from 'react'
import bookData from '../db/books.json'
import authorData from '../db/authors.json'

class Search extends React.Component {

  render () {
    return (
      <div>
        <input type="text" placeholder="Search here" />
      </div>
    )
  }

}

export default Search
