import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import ReactStars from "react-stars";

function NavBar(props) {
  const resetRating = () => {
    props.setRatingValue();
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-white" size={26}>
          Movie Store
        </Navbar.Brand>
        <ReactStars
          count={10}
          onChange={(newRating) => props.setRatingValue(newRating)}
          size={26}
          value={props.rating}
          half={false}
          color2={"#ffd700"}
        />
        <Navbar.Brand>{props.rating}</Navbar.Brand>
        <Button
          variant="light"
          onClick={() => {
            resetRating();
          }}
          className="restart-button"
        >
          Restart
        </Button>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search movie title"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                props.setSearchValue(e.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
