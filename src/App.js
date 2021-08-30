import "./App.scss";

import Home from "./components/home";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Logo from "./utilities/image/Logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <>
      <Navbar
        className="nav--home animate__animated animate__fadeIn animate__delay-4s"
        fixed="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="">
          <Link to="home"  ><img class="imageSpinNav" src={Logo}></img></Link>
          </Navbar.Brand>
          <Nav>
            <Link to="home" spy={true}  offset={-100} isDynamic={true} >
              Home
            </Link>
            <Link to="about" spy={true}  offset={-100} isDynamic={true}>
              About
            </Link>
            <Link to="porfolio" spy={true}  offset={-100} isDynamic={true}>
              Portfolio
            </Link>
            <Link to="contact" spy={true}  offset={-100} isDynamic={true}>
            Contact
            </Link>
            <Button className="button--cv" size="sm">
              My CV
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Home></Home>
    </>
  );
}

export default App;
