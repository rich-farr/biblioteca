import React, { Component } from 'react'
import { Link } from 'react-router'

let Book = (props) => {
  let linkTo = "/books/" + props.id
  return (
    <div className="book">
      <img src={props.image} />
      <h1><Link to={linkTo}>{props.title} ({props.year})</Link></h1>
      <h3>{props.author}</h3>
    </div>
    )
}

export default Book
