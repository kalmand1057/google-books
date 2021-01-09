import React, { Component } from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';
// import Card from "./Card";
// import { Container, Row, Col } from "../components/Grid";

const styles = {
    card: {
        margin: 15
    },
    img: {
        height: 200
    }
}

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }

    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("MOUNTED")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "696969",
                color: "black",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }
    }

    onClickFunc = () => {
        this.props.saveGoogleBook(this.props);
        this.getStyle();
    }

    render(props) {
        return (
        <Card style={styles.card}>
            <Card.Body>
                <Row>
                    <Col>
                        <img alt={this.props.title} src={this.props.image} style={styles.img}/>
                    </Col>
                    <Col>
                        {this.props.authors}
                    </Col>
                    <Col>
                        {this.props.description}
                    </Col>
                    <Card.Link href={this.props.link} >
                        Link Here
                    </Card.Link>
                    <Button onClick={this.onClickFunc}>{this.state.text}</Button>
                </Row>
            </Card.Body>
        </Card>
        )
    }
}

export default ResultListItem;