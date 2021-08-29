import Logo from "../utilities/image/Logo.svg";
import Avatar from "../utilities/image/avatar.jpg";
import Button from "react-bootstrap/Button";

import Galery from "../utilities/image/galery.png";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import "animate.css";

import "../utilities/css/home.scss";
import { useState, useRef } from "react";

import BurgerMenu from "./burgermenu";

export default function Home() {
  const [pageStatus, setPageStatus] = useState("loading");

  const [imageAnimation, setImageAnimation] = useState("");

  setTimeout(function () {
    setImageAnimation("animate");
  }, 6000);

  setTimeout(function () {
    setPageStatus("running");
  }, 5000);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home container-fluid">
      {pageStatus === "loading" ? (
        <div className="home__wrapper">
          <div class="logoPos">
            <img class="imageSpin" src={Logo}></img>
          </div>
        </div>
      ) : (
        <>
          <div className="home__burger-menu text-end" onClick={handleShow}>
            <img class="imageSpinNav" src={Logo}></img>
          </div>
          <BurgerMenu show={show} handleClose={handleClose}></BurgerMenu>
          <div className="home__wrapper row justify-content-center align-items-center">
            <div className="home__image col-10 col-sm-7 col-lg-5 text-lg-end text-center animate__animated animate__fadeIn">
              <img
                className={`img--avatar ${imageAnimation}`}
                src={Avatar}
              ></img>
            </div>
            <div className="home__text col-10 col-sm-7  col-lg-5 animate__animated animate__fadeIn">
              <h1 className="text--back-ground">Home</h1>
              <h1 className="text--main">
                <span>Vivian</span> Le
              </h1>
              <h5>
                Passionate web developer living in a little charming corner at
                Ha Noi city
              </h5>
              <div className="social__media-logo">
                <FaFacebookSquare className="media__logo"></FaFacebookSquare>
                <FaInstagramSquare className="media__logo"></FaInstagramSquare>
                <FaLinkedin className="media__logo"></FaLinkedin>
                <FaGithubSquare className="media__logo"></FaGithubSquare>
              </div>
            </div>
          </div>

          <div className="about__wrapper container">
            <div className="about__main-image text-center col-6">
              <img width="100%" src={Galery}></img>
            </div>
            <div className="about__main-text col-auto">
              <h1 className="text--back-ground">ABOUT</h1>
              <h2 className="text--main text-center mt-5 mb-5">Me</h2>
            </div>
            <div className="about__main-text row justify-content-between">
              <div className="main-text--left col-sm-6  col-lg-5">
                <h3>
                  <span>H.</span> Viet Le
                </h3>
                <p>
                  Hi, I am a front-end developer located in Ha Noi having a
                  greate passionate in web developing and photography. I always
                  want to create stunning UI/UX products satisfying my clients
                  with outstanding Brand Identity
                </p>
                <Button className="mt-3 mb-3 button--cv col-sm-6" size="lg">
                  Get My CV
                </Button>
              </div>
              <div className="main-text--right col-sm-6 col-lg-5">
                <h5>
                  Birthday: <span>17.01.2000</span>
                </h5>
                <h5>
                  Study: <span>swinburne uni</span>
                </h5>
                <h5>
                  Phone: <span>+81 972136868</span>
                </h5>
                <h5>
                  Adress: <span>Dong Da, Ha Noi</span>
                </h5>
                <h5>
                  Email: <span>vietlehoang2000@gmail.com</span>
                </h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
