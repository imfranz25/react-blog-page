// IMPORT ASSETS
import Laya from '../assets/images/laya-diwa.jpg';
import CV from '../assets/cv/francis-ong-cv.pdf';

const About = () => {
  return (
    <section id="about" className="pt-5 pt-md-3">
      <div className="container py-lg-5">
        <h1 className="text-center p-0 m-0 pt-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300" id="about_title"><span className="text-warning">A</span>bout Me</h1>
        <div className="row mb-5">
          <label className="col-12 text-muted m-0 p-0 mb-4 mb-md-5 text-center" data-aos="fade" data-aos-delay="300" data-aos-duration="300">Get to know me
          </label>
          <div className="col-lg-4 mb-3 mb-lg-0 d-lg-flex justify-content-center align-items-center d-none">
            {/* <img src="./../assets/images/Francis-Ong.jpg" alt="Francis C. Ong" className="about-img rounded-circle img-fluid d-none" /> */}
            <img src={Laya} alt="Laya at Diwa - CVSU" className="about-img rounded-circle img-fluid" data-aos="zoom-in-up" data-aos-delay="1000" data-aos-duration="500" />
          </div>
          <div className="col-lg-8 px-3">
            <p className="justify" data-aos="fade" data-aos-delay="300" data-aos-duration="300">Hey there! I am 21 year's old and currently a college undergrad taking up <span className="fw-bold">Bachelor of Science in Information Technology</span> at <span className="fw-bold">Cavite State University - Imus Campus.</span></p>
            <p className="justify" data-aos="fade" data-aos-delay="400" data-aos-duration="300">I enjoyed creating programs, websites and solving programming logics/problems as it is the way of expressing myself , talents, and my potential in this field.</p>
            <p className="justify" data-aos="fade" data-aos-delay="500" data-aos-duration="300">My journey into Information Technology started with the influence and inspiration from my friends way back in high school. I started creating websites during my senior high school and undergo some trainings during my OJT in Cavite Computer Center - Imus where I learned some fundamental concepts about web development, basic computer trainings and troubleshooting. Since then, I've been coding for about 5 years and learned a lot of things and build some personal projects along the way.</p>
            <p className="text-center pt-1 pt-md-3">
              <a href={CV} target="_blank" id="viewCV" className="py-1 px-2 bg-warning text-dark mt-3 btn-links text-decoration-none" data-aos="fade-up" data-aos-delay="550" data-aos-duration="300" data-aos-offset="0">View CV</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;