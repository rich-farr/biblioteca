import React, { Component } from 'react'

const Book = (props) => {
  return (
    <div>
      <h1>{props.title} ({props.year})</h1>
      <h3>{props.author}</h3>
      <img src={props.image} />
    </div>
    )
}

export default Book
