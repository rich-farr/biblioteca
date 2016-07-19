import React, { Component } from 'react'
import reactDom from 'react-dom'
import Book from './book'

class Container extends React.Component {


  render () {
    return (
    	<div className="container">
      	<p>Here's a random book from the database:</p>
      	<Book title={this.props.title} author={this.props.author} year={this.props.year} image={this.props.image}/>
    	</div>
    	)
  }

}

export default Container
