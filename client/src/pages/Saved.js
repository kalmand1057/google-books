import React, { Component } from "react";
import Hero from "../components/Hero";
import SavedList from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: []
  }

  //didMount
  componentDidMount = () => {
    this.getBooks();
  }

  //deleting books from saved page
  deleteBook = currentBook => {
    API.deleteBook(currentBook.id)
    .then(res => {
      console.log("book deleted!", res);
      this.getBooks();
    })
    .catch(err => {
      console.log("error deleting book", err);
    });
  }

  getBooks = () => {
    API.getBooks()
    .then(res => {
      this.setState({
        savedBooks: res.data
      })
    })
    .catch(err => {
      console.log("error getting books", err);
    })
  }

  render() {
    return (
      <div>
        <Hero />
        {this.state.savedBooks.length ? (
          <SavedList
          bookState={this.state.savedBooks}
          deleteBook={this.deleteBook}
          >
          </SavedList>
        ) : (
          <div>
            <hr/>
            <p>No results yet</p>
          </div>
        )}
      </div>
  );
  }
  }


export default Saved;
