import React, { Component } from 'react'
import reactDom from 'react-dom'

class Book extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
      	<h1>{this.props.title}</h1>
    	</div>
    	)
  }

}

export default Book
