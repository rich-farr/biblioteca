/*import React, { Component } from 'react'
import reactDom from 'react-dom'

class App extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
	    	<h1>Welcome to {this.props.name}</h1>
    	</div>
    	)
  }

}*/


import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Sidebar from './sidebar'
import Container from './container'


module.exports = React.createClass({

  getInitialState: function () {
    return {
    	name: 'biblioteca'
    }
  },

  render: function () {
    return (
      <div>
        <Nav title="biblioteca"/>
        <Container />
        <Book />
        <Sidebar />
      </div>
    )
  }
})
