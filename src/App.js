import React from 'react'
import SearchPage from './SearchPage.js'
import MainPage from './MainPage.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: {},
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksArray) => {
      const books = {}
      
      booksArray.forEach(book => {
        books[book.id] = book
      })

      this.setState({ books })
    })
  }

  handleShelfChange = (id, shelf) => {    
    BooksAPI.update({ id }, shelf)
    .then(() => this.setState({
      books: {
        ...this.state.books,
        [id]: {
          ...this.state.books[id],
          shelf
        }
      }
    }))
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <MainPage books={this.state.books} handleShelfChange={this.handleShelfChange} />
      </div>
    )
  }
}

export default BooksApp
