import React from 'react'
import { Route } from 'react-router-dom'
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
      console.log(booksArray)
      booksArray.forEach(book => {
        books[book.id] = book
      })

      this.setState({ books })
    })
  }

  handleShelfChange = (book, shelf) => {  
    console.log('handleShelfChange')
    console.log(this.state.books)
    BooksAPI.update(book, shelf)
    .then(() => this.setState({
      books: {
        ...this.state.books,
        [book.id]: {
          ...book,
          shelf
        }
      }
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage 
            books={this.state.books}
            handleShelfChange={this.handleShelfChange}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchPage 
            books={this.state.books}
            handleShelfChange={this.handleShelfChange} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
