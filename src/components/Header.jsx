import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <a
          style={{ margin: "0 auto" }}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
          target="_blank"
        >
          <img
            width={70}
            src="https://www.svgrepo.com/show/500015/love.svg"
            alt=""
          />
        </a>
      </Container>
    </Navbar>
  );
}

export default Header;
