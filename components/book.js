import React, { Component } from 'react'
import { Link } from 'react-router'

let Book = (props) => {
  let linkTo = "/books/" + props.id
  return (
    <div className="book">
      <img src={props.image} />
      <Link to={linkTo}><h1>{props.title} ({props.year})</h1></Link>
      <h3>{props.author}</h3>
    </div>
    )
}

export default Book
