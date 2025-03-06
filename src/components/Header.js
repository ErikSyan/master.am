import React, { Component } from "react";
import { Navbar, Container, FormControl, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from './pinterest-trends-GettyImages-1289314955-ea90f825c4d742f18868b230318f774f.jpg';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="success" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={image} height="30" width="30" className="d-inline-block align-top" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">Ծառայություններ</Nav.Link>
                <Nav.Link as={Link} to="/contacts">Աշխատեք Master</Nav.Link>
                <Nav.Link as={Link} to="/blog">Մեր մասին</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl type="text" placeholder="Search" className="me-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}