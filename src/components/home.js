import React, { useEffect, useState } from 'react';
import Logo from '../utilities/image/Logo.svg';
import LogoWhite from '../utilities/image/logo-white.svg';
import Avatar from '../utilities/image/avatar.jpg';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Galery from '../utilities/image/galery.png';

import CV from '../utilities/CV/CV.pdf';

import PorfolioItems from '../utilities/data/porfolio';

import Item from './itemList';

import Map from './map';

import Aos from 'aos';
import 'aos/dist/aos.css';

import emailjs from 'emailjs-com';

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

import 'animate.css';

import '../utilities/css/home.scss';

import BurgerMenu from './burgermenu';

export default function Home({ theme }) {
  const workItems = PorfolioItems;

  const [category, setCategory] = useState('All');

  const [pageStatus, setPageStatus] = useState('loading');

  const [imageAnimation, setImageAnimation] = useState('');

  const [showAlert, setShowAlert] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function downloadCV() {
    // window.open("https://www.topcv.vn/xem-cv/XANeV1UCBgMGBgcGVAVWV1xRDQECUQlUDFNWAA2ae7?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv");
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_3ajhow6',
        'template_1zqvd01',
        e.target,
        'user_c4tjVaTONsGqWptiuOAK4'
      )
      .then(
        (result) => {
          setShowAlert('success');
          console.log(result.text);
        },
        (error) => {
          setShowAlert('danger');
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  setTimeout(function () {
    setImageAnimation('animate');
  }, 6000);

  setTimeout(function () {
    setPageStatus('running');
  }, 5000);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-theme={theme} className='home container-fluid theme-white'>
      {pageStatus === 'loading' ? (
        <div className='home__wrapper'>
          <div className='logoPos'>
            <img
              alt='spinning logo'
              className='imageSpin'
              src={theme === 'dark' ? Logo : LogoWhite}
            ></img>
          </div>
        </div>
      ) : (
        <>
          <div
            className='home__burger-menu text-end animate__animated animate__fadeIn'
            onClick={handleShow}
          >
            <img
              alt='spinning logo'
              className='imageSpinNav'
              src={theme === 'dark' ? Logo : LogoWhite}
            ></img>
          </div>
          <BurgerMenu show={show} handleClose={handleClose}></BurgerMenu>
          <div
            id='home'
            className='home__wrapper row justify-content-center align-items-center'
          >
            <div className='home__image col-11 col-sm-8 col-lg-5 text-lg-end text-center animate__animated animate__fadeIn'>
              <img
                alt='avatar-main'
                className={`img--avatar ${imageAnimation}`}
                src={Avatar}
              ></img>
            </div>
            <div className='home__text col-10 col-sm-7  col-lg-5 animate__animated animate__fadeIn'>
              <h1 className='text--back-ground'>Home</h1>
              <h1 className='text--main'>
                <span>Vivian</span> Le
              </h1>
              <h5>
                Passionate web developer living in a little charming corner at
                Ha Noi city
              </h5>
              <div className='social__media-logo'>
                <a
                  href='http://facebook.com/le.viet.5680'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFacebookSquare className='media__logo'></FaFacebookSquare>
                </a>
                <a
                  href='https://www.instagram.com/h.vietle/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagramSquare className='media__logo'></FaInstagramSquare>
                </a>
                <a
                  href='http://facebook.com/le.viet.5680'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedin className='media__logo'></FaLinkedin>
                </a>
                <a
                  href='https://github.com/vietlehoang2000'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithubSquare className='media__logo'></FaGithubSquare>
                </a>
              </div>
            </div>
          </div>

          <div
            id='about'
            data-aos='fade-up'
            className='about__wrapper container '
          >
            <div className='about__main-image text-center col-9 col-sm-8 col-6'>
              <img alt='main-about-pic' width='100%' src={Galery}></img>
            </div>
            <div className='about__main-text col-auto'>
              <h1 className='text--back-ground'>ABOUT</h1>
              <h2 className='text--main text-center mt-5 mb-5'>Me</h2>
            </div>
            <div className='about__main-text row justify-content-between'>
              <div className='main-text--left col-sm-6  col-lg-5'>
                <h3>
                  <span>H.</span> Viet Le
                </h3>
                <p>
                  Hi, I am a front-end developer located in Hanoi and I have a
                  strong enthusiasm in web developing & photography. Therefore,
                  to be part of creating extra-ordinary UI/UX products to
                  emphasise on outstanding Brand Identity by virtue of
                  customer’s satisfaction has always been a passion of mine.
                </p>
                <a download='Le-Hoang-Viet-CV'>
                  <Button
                    onClick={() => downloadCV()}
                    className='mt-3 mb-3 button--cv col-sm-6'
                    size='lg'
                  >
                    Get My CV
                  </Button>
                </a>
              </div>
              <div className='main-text--right col-sm-6 col-lg-5'>
                <h5>
                  Birthday: <span>17.01.2000</span>
                </h5>
                <h5>
                  Study: <span>swinburne uni</span>
                </h5>
                <h5>
                  Phone:{' '}
                  <a className='phone' href='tel:+81972136868'>
                    <span>+81 972136868</span>
                  </a>
                </h5>
                <h5>
                  Adress: <span>Dong Da, Ha Noi</span>
                </h5>
                <h5>
                  Email:{' '}
                  <a className='mail' href='mailto:vitll474@gmail.com'>
                    <span>vietlehoang2000@gmail.com</span>
                  </a>
                </h5>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-right'
            id='porfolio'
            className='porfolio__wrapper container mt-5'
          >
            <div className='porfolio-text'>
              <h1 className='text--back-ground'>Portfolio</h1>
              <h1 className='text-main'>My works</h1>
            </div>
            <div className='porfolio-category '>
              <ul className='d-flex justify-content-center'>
                <li
                  className={`li ${category === 'All' && 'active'}`}
                  onClick={() => setCategory('All')}
                >
                  All
                </li>
                <li
                  className={`li ${category === 'React' && 'active'}`}
                  onClick={() => setCategory('React')}
                >
                  React
                </li>
                <li
                  className={`li ${category === 'JQuerry' && 'active'}`}
                  onClick={() => setCategory('JQuerry')}
                >
                  JQuerry
                </li>
                <li
                  className={`li ${category === 'Vanilla' && 'active'}`}
                  onClick={() => setCategory('Vanilla')}
                >
                  Vanilla
                </li>
                <li
                  className={`li ${category === 'UI' && 'active'}`}
                  onClick={() => setCategory('UI')}
                >
                  UI/UX
                </li>
              </ul>
            </div>
            <div className='items-list row'>
              {workItems.map(function (item, index) {
                if (item.category.some((product) => product === category)) {
                  return (
                    <Item
                      item={item}
                      category={category}
                      imageAnimation={imageAnimation}
                      key={item.id}
                    ></Item>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div
            data-aos='fade-up'
            id='contact'
            className='contact__wrapper container '
          >
            <div className='porfolio-text'>
              <h1 className='text--back-ground'>Get In Touch</h1>
              <h1 className='text-main'>Contact</h1>
            </div>
            <p className='col-8 col-lg-6'>
              Thanks for spending your time on my CV. Just one more step to talk
              to me. My pleasure!
            </p>

            <div className='contact-main row d-flex flex-lg-row-reverse justify-content-center pb-md-2'>
              <div className='contact-main--right-block col-9 col-lg-6'>
                <Map></Map>
              </div>
              <div className='contact-main--left-block col-9 col-lg-6'>
                <form onSubmit={sendEmail}>
                  <div className='group-input name mt-5'>
                    <input type='text' required='required' name='from_name' />
                    <label>Name</label>
                  </div>
                  <div className='group-input email mt-5'>
                    <input type='email' required='required' name='from_mail' />
                    <label>Email</label>
                  </div>
                  <div className='group-input message mt-5'>
                    <input type='Message' required='required' name='message' />
                    <label>Message</label>
                  </div>

                  {showAlert !== '' && (
                    <Alert
                      variant={showAlert}
                      onClose={() => setShowAlert('')}
                      dismissible
                    >
                      {showAlert === 'success' ? (
                        <Alert.Heading>Thanks for contacting me!</Alert.Heading>
                      ) : (
                        <Alert.Heading>
                          Sorry, there are some issues sending your mail
                        </Alert.Heading>
                      )}
                    </Alert>
                  )}

                  <Button
                    type='submit'
                    className='mt-5 mx-auto button--cv col-sm-6'
                    size='lg'
                  >
                    Message Me
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className='footer'>
            <hr></hr>
            <div className='footer-wrapper mx-auto container d-flex justify-content-between'>
              <img
                alt='logo'
                width='54px'
                height='33px'
                src={theme === 'light' ? LogoWhite : Logo}
              ></img>
              <div className='footer--adress'>
                <h4>
                  numb 11, An Trach,<br></br> Dong Da, Hanoi
                </h4>
              </div>
              <div className='footer--contact'>
                <a className='mail' href='mailto:vitll474@gmail.com'>
                  <h4>vietlehoang2000@gmail.com</h4>
                </a>
                <a className='phone' href='tel:+81972136868'>
                  <h4>+81 972136868</h4>
                </a>
              </div>
              <div className='footer--social-media'>
                <a
                  href='http://facebook.com/le.viet.5680'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFacebookSquare className='media__logo'></FaFacebookSquare>
                </a>
                <a
                  href='https://www.instagram.com/h.vietle/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagramSquare className='media__logo'></FaInstagramSquare>
                </a>
                <a
                  href='http://facebook.com/le.viet.5680'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedin className='media__logo'></FaLinkedin>
                </a>
                <a
                  href='https://github.com/vietlehoang2000'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithubSquare className='media__logo'></FaGithubSquare>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
