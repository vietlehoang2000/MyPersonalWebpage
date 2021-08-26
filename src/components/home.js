import Logo from "../utilities/image/Logo.svg";
import Avatar from "../utilities/image/avatar.jpg";

import {FaFacebookSquare,FaInstagramSquare,FaGithubSquare,FaLinkedin} from 'react-icons/fa'

import "animate.css";

import "../utilities/css/home.scss";
import { useState,useRef } from "react";

import BurgerMenu from "./burgermenu";

export default function Home() {
  const [pageStatus, setPageStatus] = useState("loading");

  const [imageAnimation,setImageAnimation] = useState('');

  setTimeout(function(){
    setImageAnimation("animate");
} , 6000);
  
  setTimeout(function(){
    setPageStatus("running")
} , 5000);

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
            <img className={`img--avatar ${imageAnimation}`} src={Avatar}></img>
          </div>
          <div className="home__text col-10 col-sm-7  col-lg-5 animate__animated animate__fadeIn">
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
        </>
      )}
    </div>
  );
}
