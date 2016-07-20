import React, { Component } from 'react'
import Author from './author'
import data from '../db/authors.json'

const authors = data.authors

class Authors extends React.Component {

  render () {
    return (
      <div className="authors pure-u-3-4">
        {authors.map(function(author, index) {
          return (
            <div key={index}>
              <Author
                name = {author.name}
              />
            </div>
          )
        })}
      </div>
    )
  }

}

export default Authors
