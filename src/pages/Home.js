/* eslint-disable react/jsx-no-target-blank */

// FONT AWESOME ICONS
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="bg-dark p-5 pt-0">
      <div
        className="animation-wrapper"
        data-aos="fade-up"
        data-aos-delay="2400"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      <div className="row pb-5">
        <div className="col-12 mt-2 mt-lg-5 pt-5">
          <div className="p-0 m-0">
            <div id="particle-slider">
              <div className="slides">
                  <div id="first-slide" className="slide" ></div>
              </div>
              <canvas className="draw"></canvas>
            </div>
          </div>
            <h5
              className="typewrite text-center user-select-none"
              data-period="100"
              data-type='[ "Hi, Im a Web Developer :) ", "I am Creative...", "I Love Programming <3 ", "I Love to Develop..." ]'>
                <span className="wrap"></span>
            </h5>
          <h4 className="text-center text-white">
            <a
              target="_blank"
              href="https://www.facebook.com/FrancisCondinoOng"
              className="home-link me-sm-4 me-2"
              data-aos="fade-right"
              data-aos-delay="1400"
              data-aos-duration="600"
              data-aos-offset="0"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/imfranz25"
              className="home-link me-sm-4 me-2"
              data-aos="fade-right"
              data-aos-delay="1200"
              data-aos-duration="500"
              data-aos-offset="0"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/franzzz_25/"
              className="home-link me-sm-4 me-2"
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="400"
              data-aos-offset="0"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://github.com/imfranz25"
              className="home-link me-sm-4 me-2"
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-duration="400"
              data-aos-offset="0"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/francis-ong25/"
              className="home-link me-sm-4 me-2"
              data-aos="fade"
              data-aos-delay="1200"
              data-aos-duration="500"
              data-aos-offset="0"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="mailto:francis.ong25@gmail.com"
              className="text-nowrap home-link"
              data-aos="fade"
              data-aos-delay="1400"
              data-aos-duration="600"
              data-aos-offset="0"
            >
              <FaEnvelope />
            </a>
          </h4>
          <p className="text-center pt-1 pt-md-3">
            <a
              href="#about"
              className="py-1 px-2 bg-warning text-dark mt-3 btn-links text-decoration-none"
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="800"
              data-aos-offset="0"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home;