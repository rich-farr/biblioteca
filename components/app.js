import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Books from './books'
import Sidebar from './sidebar'
import data from '../db/db.json'

class App extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				title: 'biblioteca'
			}
	}

	render() {
		return (
		  <div>
		    <Nav title={this.state.title}/>
		    <Books />
		    <Sidebar />
		  </div>
		)
	}
}

export default App
