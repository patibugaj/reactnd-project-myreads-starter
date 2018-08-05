import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const shelves = [
	{id: 'currentlyReading', name: 'Currently Reading'},
	{id: 'wantToRead', name: 'Want to Read'},
	{id: 'read', name: 'Read'}
];

class MainPage extends Component {

	render() {
		console.log('state books')
		console.log(this.props.books)
		return(
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          	{
          		shelves.map((shelf) => 
            		<BookShelf 
            			books={this.props.books} 
            			shelf={shelf} 
            			key={shelf.id}  
            			handleShelfChange={this.props.handleShelfChange} 
            		/>            
          		)
          	}
          </div>
        </div>
        <div className="open-search">
          <Link
          	to='/search'
          >Add a book</Link>
        </div>
      </div>
		)
	}
}

export default MainPage
