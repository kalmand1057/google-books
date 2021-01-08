import React, { Component } from "react";
import ResultListItem from "./ResultListItem";

class ResultList extends Component {
    render() {
        console.log("ResultList!", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
                <ResultListItem
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                link={book.volumeInfo.infoLink}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                description={book.volumeInfo.description}
                saveGoogleBook={this.props.saveGoogleBook}
                />
            ))
        )
    }
};

export default ResultList;