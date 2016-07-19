import React, { Component } from 'react'

const Author = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.title} ({props.year})</h3>
    </div>
    )
}

export default Author
