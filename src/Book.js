import React, { Component } from 'react'
import Changer from './Changer.js'

class Book extends Component {
  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}>
          </div>
          <Changer bookId={this.props.book.id} shelf={this.props.shelf} handleShelfChange={this.props.handleShelfChange} />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
