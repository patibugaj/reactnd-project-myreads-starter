import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              Object.values(this.props.books)
                .filter(book => book.shelf === this.props.shelf.id)
                .map(book => (
                  <li key={book.id}>
                    <Book book={book} shelf={this.props.shelf.id} handleShelfChange={this.props.handleShelfChange}/>
                  </li>                  
                ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
