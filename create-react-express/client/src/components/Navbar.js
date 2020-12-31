import React from "react";
import { Nav } from 'react-bootstrap';


// const styles = {
    
// }

function Navbar() {
  return (
  <Nav>
    <div>
        <a className="navbar-brand" href="/">Search</a>
        <a className="navbar-brand" href="/Saved">Saved</a>
    </div>
  </Nav>
  );
}


export default Navbar;