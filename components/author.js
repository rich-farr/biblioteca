import React, { Component } from 'react'

const Author = (props) => {
  return (
    <div>
      <h1>{props.author}</h1>
      <h3>{props.title} ({props.year})</h3>
      <img src={props.image} />
    </div>
    )
}

export default Author
