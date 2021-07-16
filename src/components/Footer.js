import React from "react";
import { Container } from "react-bootstrap";

/*
This component houses the default footer for all the route pages
*/

function Footer(props) {
  return (
    <Container fluid>
      <div className="footer App">@Copyright 2021 All Rights Reserved</div>
    </Container>
  );
}

export default Footer;
