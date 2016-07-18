import React, { Component } from 'react'
import reactDom from 'react-dom'

class Book extends React.Component {

  render () {
    return (
    	<div>
        <h1>{this.props.title} ({this.props.year})</h1>
        <h3>{this.props.author}</h3>
        <img src={this.props.image} />
    	</div>
    	)
  }

}

export default Book
