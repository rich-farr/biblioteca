import React, { Component } from 'react'
import { Link } from 'react-router'

const Book = (props) => {
  let linkTo = "/books/" + props.id
  return (
    <div className="book">
      <Link to={linkTo}><img src={props.image} /></Link>
      <h1>{props.title} ({props.year})</h1>
      <h3>{props.author}</h3>
    </div>
    )
}

export default Book
