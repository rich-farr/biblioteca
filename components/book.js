import React, { Component } from 'react'
import { Link } from 'react-router'

const Book = (props) => {
  let linkTo = "/books/" + props.id
  return (
    <div>
      <h1>{props.title} ({props.year})</h1>
      <h3>{props.author}</h3>
      <Link to={linkTo}><img src={props.image} /></Link>
    </div>
    )
}

export default Book
