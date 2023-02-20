import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
            Movie App
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default PublicNavbar;
