import React, { Component } from 'react'
import { Link } from 'react-router'

let Book = (props) => {
  let linkTo = "/books/" + props.id
  return (
    <div className="book">
      <div className="cover-image">
        <img src={props.image} />
      </div>
      <div className="book-content">
        <h1><Link to={linkTo}>{props.title} ({props.year})</Link></h1>
        <h3>{props.author}</h3>
      </div>
    </div>
    )
}

export default Book
