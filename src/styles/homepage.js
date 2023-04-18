import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function WhiteMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Your Brand Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Popular</Nav.Link>
          <Nav.Link>Now Playing</Nav.Link>
          <Nav.Link>Top Rated</Nav.Link>
          <Nav.Link>Upcoming</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default WhiteMenu;