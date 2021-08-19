import Logo from "../utilities/image/Logo.svg";
import Avatar from "../utilities/image/avatar.jpg";

import {FaFacebookSquare,FaInstagramSquare,FaGithubSquare,FaLinkedin} from 'react-icons/fa'

import "animate.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "../utilities/css/home.css";
import { useState } from "react";

export default function Home() {
  const [pageStatus, setPageStatus] = useState("loading");

  setTimeout(() => setPageStatus("running"), 5000);
  return (
    <div className="home container-fluid">
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
      {pageStatus === "loading" ? (
        <div className="home__wrapper">
          <div class="logoPos">
            <img class="imageSpin" src={Logo}></img>
          </div>
        </div>
      ) : (
        <div className="home__wrapper row justify-content-center align-items-center">
          <div className="home__image col-5 text-end animate__animated animate__fadeIn">
            <img className="img--avatar" src={Avatar}></img>
          </div>
          <div className="home__text col-5 animate__animated animate__fadeIn">
              <h1 className="text--back-ground">Home</h1>
              <h1 className="text--main"><span>Vivian</span> Le</h1>
              <h5>Passionate web developer living in a little charming corner at Ha Noi city</h5>
              <div className="social__media-logo">
                  <FaFacebookSquare className="media__logo"></FaFacebookSquare>
                  <FaInstagramSquare className="media__logo"></FaInstagramSquare>
                  <FaLinkedin className="media__logo"></FaLinkedin>
                  <FaGithubSquare className="media__logo"></FaGithubSquare>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
