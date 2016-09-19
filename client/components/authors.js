import React, { Component } from 'react'
import Author from './author'
import data from '../../db/authors.json'

const authors = data.authors

class Authors extends React.Component {

  render () {
    return (
      <div>
        {authors.map(function(author, index) {
          return (
            <div key={index}>
              <Author
                name = {author.name}
                id = {author.id}
                books = {author.books}
              />
            </div>
          )
        })}
      </div>
    )
  }

}

export default Authors
