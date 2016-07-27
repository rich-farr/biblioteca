import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
import Search from './search'

class Nav extends React.Component {

  render () {
    return (
    	<nav>
      	<h1>{this.props.title}</h1>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="/books" activeClassName="active">Books</Link>
        <Link to="/authors" activeClassName="active">Authors</Link>
        <Search />
    	</nav>
    	)
  }
}

export default Nav
