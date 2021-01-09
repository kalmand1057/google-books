import React, { Component } from "react";
import Hero from "../components/Hero";
import { Input, SubmitBtn} from "../components/Searchbar";
import API from "../utils/API"
import ResultList from "../components/ResultList";

class Search extends Component {
  state = {
    books: [],
    search: ""
  }

  //Google API search
  searchBooks = () => {
   API.googleBooks(this.state.search)
   .then(res => {
     console.log(res.data.items)
     this.setState({
       books: res.data.items,
       search: ""
     })
   })
   .catch(err => console.log(err))
  };

  //Input
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  //data submission
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks();
  };

  //save books
  saveBook = currentBook => {
    console.log("got the current book!!", currentBook)
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors.authors,
      description: currentBook.authors.description,
      image: currentBook.authors.image,
      link: currentBook.link
    })
    .then(res => console.log("posted to database!", res))
    .catch(err => console.log("error posting to database", err));
  }

  render() {
    return (
      <div>
        <Hero />
        <Input 
        value={this.state.search}
        onChange={this.handleInputChange}
        name="search"
        placeholder="type keyword here"
        />
        <SubmitBtn
        onClick={this.handleFormSubmit}
        />

        {this.state.books.length ? (
          <ResultList
          bookState={this.state.books}
          saveBook={this.saveBook}
          >
          </ResultList>
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


export default Search;