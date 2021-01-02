import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

const styles = {
    img: {
        backgroundImage: "url(/books.jpeg)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    header: {
        color: "white",
        fontSize: 50
    },
    p: {
        color: "white",
        fontSize: 25  
    }
}

function Hero() {
    return (
    <div>
        <Jumbotron fluid  style={styles.img}>
            <Container>
                <h1 style={styles.header}>Google Books</h1>
                <p style={styles.p}>Find a book from this collection here</p>
            </Container>
        </Jumbotron>  
    </div>
    );
  }


export default Hero;