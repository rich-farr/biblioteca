import React, { Component } from 'react'
import Nav from './nav'
import Book from './book'
import Books from './books'
import Sidebar from './sidebar'
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
        <Books />
        <Sidebar />
      </div>
    )
  }
})
