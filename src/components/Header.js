import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
  InputGroup
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" variant={"dark"} expand="lg" collapseOnSelect>
          <Container>
            <div className="brand">
              <LinkContainer to={"/"}>
                <Navbar.Brand>
                  <img
                    src="/assets/images/logo.png"
                    className={"img-fluid img-logo"}
                    alt='header logo'
                  />
                </Navbar.Brand>
              </LinkContainer>
            </div>
            <div className="search w-50">
              {/* Search */}
              <Form className="d-flex">
                <InputGroup >
                  <FormControl
                      placeholder="Search for specific City"
                      aria-label="Search for specific City"
                      aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search
                  </Button>
                </InputGroup>
              </Form>
              {/* Search */}
            </div>
            <div className="my-links">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>
                      <i className={"fas fa-shopping-cart"} /> Cities
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className={"fas fa-user"} /> Sign in
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
