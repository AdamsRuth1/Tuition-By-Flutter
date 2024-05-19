
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
      <Nav className="me-auto primary-text-color ">
        <Nav.Link href="#home" className="me-5 primary-text-color">
          Home
        </Nav.Link>
        
        <Nav.Link href="#pricing" className="me-5 primary-text-color ">
          Blog
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-5 primary-text-color ">
          Developer
        </Nav.Link>
        <Nav.Link href="#support" className="me-5 primary-text-color ">
          Support
        </Nav.Link>
      </Nav>
      <Nav className="">
        <button
          type="button btn"
          className="btn outline-primary me-4 custom-outline-primary btnn "
        >
          Download App
        </button>
        <Button className="sign-in btnn ">Sign in</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      </>
    );
  }
  
  export default Header;
  