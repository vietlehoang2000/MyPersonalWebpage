import Offcanvas from 'react-bootstrap/Offcanvas';

import Logo from '../utilities/image/Logo.svg';

import { IoCloseSharp } from 'react-icons/io5';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-scroll';

import CV from '../utilities/CV/CV.pdf';

export default function BurgerMenu({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <div className='burger__button-close text-end' onClick={handleClose}>
          <IoCloseSharp></IoCloseSharp>
        </div>
        <div className='burger__nav'>
          <Offcanvas.Title className='text-center'>
            <img alt='logo' className='imageSpinNav' src={Logo}></img>
          </Offcanvas.Title>
          <Offcanvas.Body>
            <Nav className='burger__nav--link row'>
              <Link to='home' spy={true} offset={-100} isDynamic={true}>
                Home
              </Link>
              <Link to='about' spy={true} offset={-100} isDynamic={true}>
                About
              </Link>
              <Link to='porfolio' spy={true} offset={-100} isDynamic={true}>
                Portfolio
              </Link>
              <Link to='contact' spy={true} offset={-100} isDynamic={true}>
                Contact
              </Link>
              <a href={CV} download="Le-Hoang-Viet-CV">
                <Button
                  onClick={() =>
                    window.open(
                      'https://www.topcv.vn/xem-cv/XANeV1UCBgMGBgcGVAVWV1xRDQECUQlUDFNWAA2ae7?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv'
                    )
                  }
                  className='button--cv col-4 mx-auto'
                  size='sm'
                >
                  My CV
                </Button>
              </a>
            </Nav>
            <h5 className='text-center mt-3'>©2021 Vivian</h5>
            <a className='phone' href='tel:+81972136868'>
              <h5 className='text-center'>+81 0972136868</h5>
            </a>
            <a className='mail' href='mailto:vitll474@gmail.com'>
              <h5 className='text-center'>vietlehoang2000@gmail.com</h5>
            </a>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}
