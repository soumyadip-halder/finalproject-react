import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { saveStr } from "../redux/search/actions";

/*
This component houses the navbar featuring the default header for all the route pages
*/

function Header(props) {
  const refer = useRef(null);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="navbar-brand">
        Movie Ticket Booking App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" fill variant="tabs" defaultActiveKey="#latest">
          <Nav.Link href="#upcoming">
            <NavLink
              to="/upcoming"
              className="nav-link"
              activeClassName="selected"
            >
              Upcoming Movies
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#latest">
            <NavLink
              className="nav-link"
              to="/latest"
              activeClassName="selected"
            >
              Latest Movies
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#events">
            <NavLink
              className="nav-link"
              to="/events"
              activeClassName="selected"
            >
              Nearby Events
            </NavLink>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            ref={refer}
          />
          <Button
            variant="outline-success"
            onClick={() => props.searchStr(refer.current.value)}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchStr: (str) => dispatch(saveStr(str)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
