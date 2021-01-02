import React from "react";
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const styles = {
    
}

export function Input(props) {
  return (
    <Form>
      <input {...props}/>
    </Form>
  )
};

export function SubmitBtn(props) {
return (
  <Button variant="dark" type="submit"{...props}>Search</Button>
)
};

// function Searchbar() {
//     return (
//     <Container>
//       <Form>
//         <Row>
//             <Col>
//                 <Form.Control type="text" placeholder="Search here" />
//             </Col>
//             <Col>
//                 <Button variant="dark" type="submit">Submit</Button>
//             </Col>
//         </Row>
//       </Form>  
//     </Container>
//     );
//   }


// export default Searchbar;