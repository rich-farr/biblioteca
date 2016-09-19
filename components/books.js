import React, { Component } from 'react'
import Book from './book'
import data from '../db/books.json'

const books = data.books

class Books extends React.Component {

  render () {
    return (
    	<div className="books">
    		{books.map(function(book, index) {
    			return (
    				<div key={index}>
        				<Book
        					title = {book.title}
        					author = {book.author}
        					year = {book.year}
        					image = {book.image}
                  id = {book.id}
        				/>
    				</div>
    			)
    		})}
    	</div>
    )
  }
}

export default Books

// Books (props) {
//   return (
//     <div className="books">
//       {props.books.map(function(book, index) {
//         return (
//           <div key={index}>
//               <Book
//                 title = {book.title}
//                 author = {book.author}
//                 year = {book.year}
//                 image = {book.image}
//                 id = {book.id}
//               />
//           </div>
//         )
//       })}
//     </div>
//   )
// }
