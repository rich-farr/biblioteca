import React, { Component } from 'react'
import Author from './author'
import data from '../db/authors.json'

class AuthorDetail extends React.Component {
  render () {
    let author = data.authors[this.props.params.id - 1]
		return (
			<div className="pure-u-3-4">
				<Author
					name = {author.name}
					id = {author.id}
				/>
			</div>
		)
  }
}

export default AuthorDetail
