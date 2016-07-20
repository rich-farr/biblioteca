import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Books from './books'
import Sidebar from './sidebar'
import RandomBook from './randombook'
import data from '../db/books.json'

class App extends React.Component {

	render() {
		return (
		  <div>
		    <Nav title="biblioteca"/>
		    <Sidebar />
				{this.props.children}
		  </div>
		)
	}
}

export default App
