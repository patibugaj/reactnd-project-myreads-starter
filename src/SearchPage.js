import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {  
	state = {
    searchQuery: '',
    searchedBooks: {},
  }



  updateQuery = (searchQuery) => {
  	this.setState({
  		searchQuery
  	})

  	this.getBooks(searchQuery)
  }

	getBooks = (searchQuery) => {
  	if(searchQuery==='') {

	  	this.setState({searchedBooks: {}})

	  } else {
	    BooksAPI.search(searchQuery).then((searchedBooksArray) => {
	    	
	    	if(searchQuery!==this.state.searchQuery)
	    		return

	    	const searchedBooks = {}

	      searchedBooksArray.forEach(searchedBook => {
	        searchedBooks[searchedBook.id] = searchedBook
	      })

	    	this.setState({
					searchedBooks: searchedBooks,
	    	})
	   	})
	  }
  }

	render() {
		return (
			<div className="search-books">
	      <div className="search-books-bar">
	        <Link className="close-search" to="/">Close</Link>
	        <div className="search-books-input-wrapper">
	          {/*
	            NOTES: The search from BooksAPI is limited to a particular set of search terms.
	            You can find these search terms here:
	            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	            you don't find a specific author or title. Every search is limited by search terms.
	          */}
	          <input 
	          	type="text" 
	          	placeholder="Search by title or author"
	          	value={this.state.searchQuery}
	          	onChange={(event) => {
		          		this.updateQuery(event.target.value) 
		          	}
	          	}
	          />

	        </div>
	      </div>
	      
	      <div className="search-books-results">
	        <ol className="books-grid">
	        {
            Object.values(this.state.searchedBooks)
            .map(searchedBook => (
            	<li key={ searchedBook.id } >
            		<Book book={ searchedBook } handleShelfChange={this.props.handleShelfChange} />
            	</li>
            ))
          }
	        </ol>
	      </div>
	    </div>
		);
	}
}

export default SearchPage
