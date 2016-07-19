import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Sidebar from './sidebar'
import Container from './container'
import data from '../db/db.json'


module.exports = React.createClass({

  getInitialState: function () {
    return {
    	title: 'biblioteca'
    }
  },

  render: function () {
    return (
      <div>
        <Nav title={this.state.title}/>
        <Container />
        <Sidebar />
      </div>
    )
  }
})
