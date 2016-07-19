import React, { Component } from 'react'
import reactDom from 'react-dom'
import data from '../db/db.json'

class Book extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        title: data.books[0].title,
        author: data.books[0].author,
        year: data.books[0].year,
        image: data.books[0].image
      }
  }

  render () {
    return (
    	<div>
        <h1>{this.state.title} ({this.state.year})</h1>
        <h3>{this.state.author}</h3>
        <img src={this.state.image} />
    	</div>
    	)
  }

}

export default Book
