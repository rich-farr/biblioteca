import React, { Component } from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {

  render () {
    return (
    	<nav>
      	<h1>Welcome to {this.props.title}</h1>
        <Link to="/home" activeClassName="active">Home</Link>
        <Link to="/books" activeClassName="active">Books</Link>
        <Link to="/authors" activeClassName="active">Authors</Link>
    	</nav>
    	)
  }
}

export default Nav
