import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {

  render () {
    return (
    	<nav>
      	<h1>Welcome to {this.props.title}</h1>
        <Link to="/home">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/authors">Authors</Link>
    	</nav>
    	)
  }
}

export default Nav
