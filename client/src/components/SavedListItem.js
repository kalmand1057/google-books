import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';

const styles = {
    card: {
        margin: 15
    },
    img: {
        height: 200
    }
}

function ResultListItem(props) {
    const {title, authors, image, link, description, deleteBook} = props
    return (
        <Card style={styles.card}>
            <Card.Body>
                <Row>
                    <Col>
                        <img alt={title} src={image} style={styles.img}/>
                    </Col>
                    <Col>
                        {authors}
                    </Col>
                    <Col>
                        {description}
                    </Col>
                    <Col>
                        <Card.Link href={link} >
                            Link Here
                        </Card.Link>
                        <Button onClick={deleteBook.bind(this, props)}>Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ResultListItem;