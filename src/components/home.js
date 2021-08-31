import React, { useRef, useEffect, useState } from "react";
import Logo from "../utilities/image/Logo.svg";
import Avatar from "../utilities/image/avatar.jpg";
import Button from "react-bootstrap/Button";

import Galery from "../utilities/image/galery.png";

import PorfolioItems from "../utilities/data/porfolio";

import Item from "./itemList";

import Map from "./map";

import Aos from "aos";
import "aos/dist/aos.css"

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import "animate.css";

import "../utilities/css/home.scss";

import BurgerMenu from "./burgermenu";

export default function Home() {
  const [workItems, setWorkItems] = useState(PorfolioItems);

  const [category, setCategory] = useState("All");

  const [pageStatus, setPageStatus] = useState("loading");

  const [imageAnimation, setImageAnimation] = useState("");

  setTimeout(function () {
    setImageAnimation("animate");
  }, 6000);

  setTimeout(function () {
    setPageStatus("running");
  }, 5000);

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
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
          <div
            id="home"
            className="home__wrapper row justify-content-center align-items-center"
          >
            <div className="home__image col-12 col-sm-8 col-lg-5 text-lg-end text-center animate__animated animate__fadeIn">
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

          <div id="about" data-aos="fade-up" className="about__wrapper container ">
            <div  className="about__main-image text-center col-10 col-sm-8 col-6">
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

          <div data-aos="fade-right" id="porfolio" className="porfolio__wrapper container mt-5">
            <div className="porfolio-text">
              <h1 className="text--back-ground">Portfolio</h1>
              <h1 className="text-main">My works</h1>
            </div>
            <div className="porfolio-category ">
              <ul className="d-flex justify-content-center">
                <li
                  className={category === "All" && "active"}
                  onClick={() => setCategory("All")}
                >
                  All
                </li>
                <li
                  className={category === "React" && "active"}
                  onClick={() => setCategory("React")}
                >
                  React
                </li>
                <li
                  className={category === "JQuerry" && "active"}
                  onClick={() => setCategory("JQuerry")}
                >
                  JQuerry
                </li>
                <li
                  className={category === "Vanilla" && "active"}
                  onClick={() => setCategory("Vanilla")}
                >
                  Vanilla
                </li>
                <li
                  className={category === "UI" && "active"}
                  onClick={() => setCategory("UI")}
                >
                  UI/UX
                </li>
              </ul>
            </div>
            <div className="items-list row">
              {workItems.map(function (item) {
                if (item.category.some((product) => product === category)) {
                  return (
                    <Item
                      item={item}
                      category={category}
                      imageAnimation={imageAnimation}
                    ></Item>
                  );
                }
              })}
            </div>
          </div>

          <div data-aos="fade-up" id="contact" className="contact__wrapper container">
            <div className="porfolio-text">
              <h1 className="text--back-ground">Get In Touch</h1>
              <h1 className="text-main">Contact</h1>
            </div>
            <p className="col-8 col-lg-6">
              Thanks for spending your time on my CV. Just one more step to talk
              to me. My pleasure!
            </p>
            <div className="contact-main row d-flex flex-lg-row-reverse justify-content-center">
              <div className="contact-main--right-block col-9 col-lg-6">
                <Map></Map>
              </div>
              <div className="contact-main--left-block col-9 col-lg-6">
                <div className="group-input name mt-5">
                  <input type="text" required="required" />
                  <label>Name</label>
                </div>
                <div className="group-input email mt-5">
                  <input type="email" required="required" />
                  <label>Email</label>
                </div>
                <div className="group-input message mt-5">
                  <input type="Message" required="required" />
                  <label>Message</label>
                </div>
                <Button className="mt-5 mx-auto button--cv col-sm-6" size="lg">
                  Message Me
                </Button>
              </div>
            </div>
          </div>

          <div className="footer">
            <hr></hr>
            <div className="footer-wrapper mx-auto container d-flex justify-content-between">
              <img width="74px" height="53px" src={Logo}></img>
              <div className="footer--adress">
                <h4>numb 11, An Trach,<br></br> Dong Da, Hanoi</h4>
              </div>
              <div className="footer--contact">
                <h4>vietlehoang2000@gmail.com</h4>
                <h4>+81 972136868</h4>
              </div>
              <div className="footer--social-media">
              <FaFacebookSquare className="media__logo"></FaFacebookSquare>
                <FaInstagramSquare className="media__logo"></FaInstagramSquare>
                <FaLinkedin className="media__logo"></FaLinkedin>
                <FaGithubSquare className="media__logo"></FaGithubSquare>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
