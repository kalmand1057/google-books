import React from "react";
import { Nav } from 'react-bootstrap';

const styles = {
    
}

function Navbar() {
    return (
    <Nav
    activeKey="/search"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Nav.Item>
            <Nav.Link href="/search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="saved">Saved</Nav.Link>
        </Nav.Item>  
    </Nav>
    );
  }


export default Navbar;