import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="danger" variant="dark">
          <Navbar.Brand href="/">Pizza Shop</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Resturant</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="#">Takeaway</Nav.Link>
          </Nav>
          <Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
