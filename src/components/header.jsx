// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/Logo Extended.png"
// import logo from "../assets/image/Logo Extended.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar
        className="header-bg "
        data-bs-theme="light"
        expand="lg"
        fixed="top"
      >
        <Container className="header justify-content-between">
          <Navbar.Brand href="#home">
            <img src={logo} height="40" alt="Your Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto primary-text-color ">
              <Nav.Link
                href="#home"
                className="nav-link-with-margin primary-text-color"
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#pricing"
                className="nav-link-with-margin primary-text-color "
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="nav-link-with-margin primary-text-color "
              >
                Developer
              </Nav.Link>
              <Nav.Link
                href="#support"
                className="nav-link-with-margin primary-text-color "
              >
                Support
              </Nav.Link>
            </Nav>
            <Nav className="btnn">
              <Link
                //   type="button"
                to="/"
                className="btn outline-primary me-md-4 custom-outline-primary btnn"
              >
                Download App
              </Link>
              <Link to="/signin" className="sign-in me-md-0 me-3 mb-md-0 mb-3 px-3 pt-2">
                Sign in
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
