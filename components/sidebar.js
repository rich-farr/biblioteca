import React, { Component } from 'react'
import reactDom from 'react-dom'

class Sidebar extends React.Component {

  render () {
    return (
    	<div id="sidebar">
      	<p>{this.props.sidebarText}</p>
    	</div>
    	)
  }

}

export default Sidebar
