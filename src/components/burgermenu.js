import Offcanvas from "react-bootstrap/Offcanvas";

import Logo from "../utilities/image/Logo.svg";

import {IoCloseSharp} from 'react-icons/io5'

import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";

export default function BurgerMenu({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <div className="burger__button-close text-end" onClick={handleClose}>
        <IoCloseSharp></IoCloseSharp>
        </div>
        <div className="burger__nav">
        <Offcanvas.Title className="text-center">
          <img class="imageSpinNav" src={Logo}></img>
        </Offcanvas.Title>
        <Offcanvas.Body>
        <Nav className="burger__nav--link row">
            <Nav.Link className="text-center" href="#home">Home</Nav.Link>
            <Nav.Link className="text-center" href="#features">About</Nav.Link>
            <Nav.Link className="text-center" href="#Porfolio">Porfolio</Nav.Link>
            <Nav.Link className="text-center" href="#Contact">Contact</Nav.Link>
            <Button className="button--cv col-4 mx-auto" size="sm">
                  My CV
            </Button>
          </Nav>
        <h5 className="text-center mt-3">©2021 Vivian</h5>
        <h5 className="text-center">+81 0972136868</h5>
        <h5 className="text-center">vietlehoang2000@gmail.com</h5>
        </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}
