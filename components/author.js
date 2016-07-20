import React, { Component } from 'react'
import { Link } from 'react-router'

let Author = (props) => {
  let linkTo = "/authors/" + props.id
  return (
    <div>
      <h1><Link to={linkTo}>{props.name}</Link></h1>
    </div>
    )
}

export default Author
