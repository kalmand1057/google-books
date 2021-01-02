import React, { Component } from "react";
import Card from "./Card";
// import { Container, Row, Col } from "../components/Grid";

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
        const {book} = this.props
        return (
            <Card />
        )
    }
}

export default ResultListItem;