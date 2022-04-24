const Footer = () => {
  return (
    <>
      <footer class="container-fluid bg-dark text-white footer-text" id="contact">
        <h4 class="text-center text-white pt-1 pt-md-4 mb-0">
            <a target="_blank" href="https://www.facebook.com/FrancisCondinoOng" class="home-link me-sm-4 me-2" rel="noreferrer">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://twitter.com/imfranz25" class="home-link me-sm-4 me-2" rel="noreferrer">
                <i class="fab fa-twitter"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/franzzz_25/" class="home-link me-sm-4 me-2" rel="noreferrer">
                <i class="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://github.com/imfranz25" class="home-link me-sm-4 me-2" rel="noreferrer">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/francis-ong25/" class="home-link me-sm-4 me-2" rel="noreferrer">
                <i class="fab fa-linkedin"></i>
            </a>
        </h4>
        <p class="d-flex align-items-center justify-content-center p-0 m-0 pb-2 pb-lg-0">
            Contact :
            <a target="_blank" href="mailto:francis.ong25@gmail.com" class="text-nowrap home-link mx-1" rel="noreferrer"><i class="fa fa-envelope"></i></a>
            francis.ong25@gmail.com
        </p>
        <div class="row">
          <hr />
          <div class="col-12 d-flex justify-content-center align-items-center">
            <p class="p-0 m-0">&copy; 2022 Francis Ong &bull; All Rights Reserved.</p>
          </div>
          <div class="col-12 d-flex justify-content-center align-items-center mb-3">
            <p class="p-0 m-0">Made with custom CSS, JS and  Bootstrap 5.</p>
          </div>
        </div>
      </footer>
      <button class="m-5 bg-warning border-0 p-0 rounded d-none" id="nav-home">
        <a href="#home" class="px-3" rel="noreferrer"><i class="fa fa-arrow-up text-light py-2 my-1"></i></a>
      </button>
    </>
  )
}

export default Footer;