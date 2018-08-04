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
              handleShelfChange={this.handleShelfChange} 
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
