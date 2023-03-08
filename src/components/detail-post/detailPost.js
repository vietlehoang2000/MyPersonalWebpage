import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoWhite from '../../utilities/image/logo-white.svg';
import Logo from '../../utilities/image/Logo.svg';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from "react-router-dom";
import CV from '../../utilities/CV/CV.pdf';
import Button from 'react-bootstrap/Button';
import '../../utilities/css/detailPost.scss';
import ImageShow from './imageShow';
import postItems from '../../utilities/data/porfolio'
const DetailPost = ({ theme, changeTheme }) => {
  const { postId } = useParams();
  const postDetail = postItems.find(item => postId === item.id)
  const { desc, link } = postDetail;
  const renderDetail = () => {
    let rows = [];
    for (const key in desc) {
      rows.push(
        <React.Fragment>
          <div className='main--text'>
            {key}
          </div>
          <div className='detail--text'>
            {desc[key]}
          </div>
        </React.Fragment>
      )
    }
    return rows;
  }
  return (
    <div data-theme={theme} className='wrapper'>
      <div data-theme={theme} className='detailPost'>
        <Navbar
          className={`nav--home animate__animated animate__fadeIn ${theme}`}
          fixed='top'
          variant='dark'
        >
          <Container className={theme}>
            <Navbar.Brand href=''>
              <LinkScroll to='home'>
                <img
                  className='imageSpinNav'
                  alt='logo'
                  src={theme === 'dark' ? Logo : LogoWhite}
                  onClick={() => changeTheme()}
                ></img>
              </LinkScroll>
            </Navbar.Brand>
            <Nav>
              <Link to='/'>
                Home
              </Link>
              <a href={CV} download="Le-Hoang-Viet-CV">
                <Button className="button--cv" size="sm">
                  My CV
                </Button>
              </a>
            </Nav>
          </Container>
        </Navbar>
        <div className='container-fluid detailPost__wrapper d-flex justify-content-center'>
          <div className='imagesShow col-6 me-4'>
            <ImageShow postDetail={postDetail} />
          </div>
          <div className='postInfor col-4 mt-4 pt-2'>
            {renderDetail()}
            {
              link &&
              <div className='d-flex justify-content-center'>
                <Button
                  onClick={() =>
                    window.open(link)
                  }
                  className='button--cv col-4 mt-4'
                  size='sm'
                >
                  VISIT SITE
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>)
}

export default DetailPost;