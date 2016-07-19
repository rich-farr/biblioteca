import React, { Component } from 'react'
import reactDom from 'react-dom'

class Nav extends React.Component {

  render () {
    return (
    	<nav>
      	<h1>Welcome to {this.props.title}</h1>
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/authors">Authors</a>
    	</nav>
    	)
  }
}

export default Nav
