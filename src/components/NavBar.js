import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
// import styles from "./NavBar.module.css";
import Nav from "react-bootstrap/Nav";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link as={Link} to="/">
          <Navbar.Brand>Liam Watson</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
