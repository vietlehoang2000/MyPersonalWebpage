import "./App.scss";

import Home from "./components/home";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Logo from "./utilities/image/Logo.svg";
import LogoWhite from "./utilities/image/logo-white.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-scroll";

import CV from "./utilities/CV/CV.pdf";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  }

  // function toggle() {
  //   document.body.style.backgroundColor =
  //     document.body.style.backgroundColor == "black" ? "#e0e0e0" : "black";
  // }

  return (
    <>
      <Navbar
        className={`nav--home animate__animated animate__fadeIn animate__delay-4s ${theme}`}
        fixed="top"
        variant="dark"
      >
        <Container className={theme}>
          <Navbar.Brand href="">
            <Link to="home">
              <img
                className="imageSpinNav"
                alt="logo"
                src={theme === "dark" ? Logo : LogoWhite}
                onClick={() => changeTheme()}
              ></img>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link to="home" spy={true} offset={-100} isDynamic={true}>
              Home
            </Link>
            <Link to="about" spy={true} offset={-100} isDynamic={true}>
              About
            </Link>
            <Link to="porfolio" spy={true} offset={-100} isDynamic={true}>
              Portfolio
            </Link>
            <Link to="contact" spy={true} offset={-100} isDynamic={true}>
              Contact
            </Link>
            <a href={CV} download="Le-Hoang-Viet-CV">
              <Button className="button--cv" size="sm">
                My CV
              </Button>
            </a>
          </Nav>
        </Container>
      </Navbar>
      <Home theme={theme}></Home>
    </>
  );
}

export default App;
