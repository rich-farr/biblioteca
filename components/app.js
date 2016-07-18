import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Sidebar from './sidebar'
import Container from './container'
import data from '../db/db.json'


module.exports = React.createClass({

  getInitialState: function () {
    return {
    	title: 'biblioteca',
    	containerText: 'Here\'s a random book from the database:',
    	sidebarText: 'Here\'s the sidebar'
    }
  },

  render: function () {
    return (
      <div>
        <Nav title={this.state.title}/>
        <Container containerText={this.state.containerText}/>
        <Book />
        <Sidebar sidebarText={this.state.sidebarText}/>
      </div>
    )
  }
})
