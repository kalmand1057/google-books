import React from "react";
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const styles = {
    
}

function Searchbar() {
    return (
    <Container>
      <Form>
        <Row>
            <Col>
                <Form.Control type="text" placeholder="Enter keyword here" />
            </Col>
            <Col>
                <Button variant="dark" type="submit">Submit</Button>
            </Col>
        </Row>
      </Form>  
    </Container>
    );
  }


export default Searchbar;