import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'

class Nav extends React.Component {

  render () {
    return (
    	<nav className="pure-menu pure-menu-horizontal">
      	<h1 className="pure-menu-heading">Welcome to {this.props.title}</h1>
        <IndexLink to="/" className="pure-menu-item pure-menu-link" activeClassName="active">Home</IndexLink>
        <Link to="/books" className="pure-menu-item pure-menu-link" activeClassName="active">Books</Link>
        <Link to="/authors" className="pure-menu-item pure-menu-link" activeClassName="active">Authors</Link>
    	</nav>
    	)
  }
}

export default Nav
