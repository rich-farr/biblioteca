import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Books from './books'
import Sidebar from './sidebar'
import data from '../db/db.json'

class App extends React.Component {

	render() {
		return (
		  <div>
		    <Nav title="biblioteca"/>
		    <Books />
		    <Sidebar />
		  </div>
		)
	}
}

export default App
