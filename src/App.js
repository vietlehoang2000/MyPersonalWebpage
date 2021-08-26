import './App.scss';
import Button from 'react-bootstrap/Button'
import Home from './components/home';

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Logo from "./utilities/image/Logo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
   <Navbar
        className="nav--home animate__animated animate__fadeIn animate__delay-4s"
        fixed="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="">
            <img class="imageSpinNav" src={Logo}></img>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#Porfolio">Porfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   <Home></Home>
    </>
  );
}

export default App;
