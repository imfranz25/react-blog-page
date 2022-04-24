import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-dark text-white footer-text" id="contact">
        <h4 className="text-center text-white pt-1 pt-md-4 mb-0">
            <a target="_blank" href="https://www.facebook.com/FrancisCondinoOng" className="home-link me-sm-4 me-2" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a target="_blank" href="https://twitter.com/imfranz25" className="home-link me-sm-4 me-2" rel="noreferrer">
              <FaTwitter />
            </a>
            <a target="_blank" href="https://www.instagram.com/franzzz_25/" className="home-link me-sm-4 me-2" rel="noreferrer">
              <FaInstagram />
            </a>
            <a target="_blank" href="https://github.com/imfranz25" className="home-link me-sm-4 me-2" rel="noreferrer">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/francis-ong25/" className="home-link me-sm-4 me-2" rel="noreferrer">
              <FaLinkedin />
            </a>
        </h4>
        <p className="d-flex align-items-center justify-content-center p-0 m-0 pb-2 pb-lg-0">
            Contact :
            <a target="_blank" href="mailto:francis.ong25@gmail.com" className="text-nowrap home-link mx-1" rel="noreferrer"><FaEnvelope /></a>
            francis.ong25@gmail.com
        </p>
        <div className="row">
          <hr />
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p className="p-0 m-0">&copy; 2022 Francis Ong &bull; All Rights Reserved.</p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center mb-3">
            <p className="p-0 m-0">Made on the top of React, Bootstrap, and custom CSS & JS.</p>
          </div>
        </div>
      </footer>
      <button className="m-5 bg-warning border-0 p-0 rounded d-none" id="nav-home">
        <a href="#home" className="px-3" rel="noreferrer">
          <i><FaArrowUp /></i>
        </a>
      </button>
    </>
  )
}

export default Footer;