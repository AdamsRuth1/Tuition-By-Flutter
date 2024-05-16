
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/Logo Extended.png';
// import "./custom.css";


function Header() {
    return (
      <>
       <Navbar className="header-bg" data-bs-theme="light" expand="lg" fixed="top">
  <Container className="header justify-content-between">
    <Navbar.Brand href="#home">
      <img src={logo} height="40" alt="Your Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="main-nav" />
    <Navbar.Collapse id="main-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className="me-5 text-color">
          Home
        </Nav.Link>
        <Nav.Link href="#features" className="me-5 text-dark">
          Blog
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-5 text-dark">
          Developer
        </Nav.Link>
        <Nav.Link href="#support" className="me-5 text-dark">
          Support
        </Nav.Link>
      </Nav>
      <Nav>
        <button
          type="button"
          className="btn outline-primary me-4 custom-outline-primary"
        >
          Download App
        </button>{" "}
        <Button className="sign-in">Sign in</Button>{" "}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      </>
    );
  }
  
  export default Header;
  