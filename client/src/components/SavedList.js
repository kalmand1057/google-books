import React, { Component } from "react";
import SavedListItem from "../components/SavedListItem";

class ResultList extends Component {
    render() {
        return (
            this.props.bookState.map((book) => (
                <SavedListItem
                key={book._id}
                id={book._id}
                title={book.volumeInfo.title}
                link={book.volumeInfo.infoLink}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.image ? book.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                description={book.volumeInfo.description}
                deleteBook={this.props.deleteBook}
                />
            ))
        )
    }
}

export default ResultList;