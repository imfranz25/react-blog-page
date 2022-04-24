// GIBLE PROJECT
import appletGible from '../assets/images/applet/gible.png';

// HUREMAS CAPSTONE PROJECT
import huremasApplicant from '../assets/images/huremas/huremas_applicant.png';
import huremasDashboard from '../assets/images/huremas/huremas_dashboard.png';
import huremasDocument from '../assets/images/huremas/huremas_document.png';
import huremasEmployee from '../assets/images/huremas/huremas_employee.png';
import huremasHome from '../assets/images/huremas/huremas_home.png';
import huremasJob from '../assets/images/huremas/huremas_job.png';
import huremasLogin from '../assets/images/huremas/huremas_login.png';
import huremasPayroll from '../assets/images/huremas/huremas_payroll.png';
import huremasTask from '../assets/images/huremas/huremas_task.png';
import huremasTraining from '../assets/images/huremas/huremas_training.png';
import huremasUser from '../assets/images/huremas/huremas_user.png';

// SYRA POS SYSTEM
import syraEmployee from '../assets/images/syraPOS/syra_employee.png';
import syraHome from '../assets/images/syraPOS/syra_home.png';
import syraLogin from '../assets/images/syraPOS/syra_login.png';
import syraPayroll from '../assets/images/syraPOS/syra_payroll.png';
import syraPOSA from '../assets/images/syraPOS/syra_posA.png';
import syraPOSB from '../assets/images/syraPOS/syra_posB.png';
import syraUser from '../assets/images/syraPOS/syra_user.png';

// RMEEC
import rmsAccount from '../assets/images/rmeec-rms/rms_account.png';
import rmsArchive from '../assets/images/rmeec-rms/rms_archive.png';
import rmsDashboard from '../assets/images/rmeec-rms/rms_dashboard.png';
import rmsDtr from '../assets/images/rmeec-rms/rms_dtr.png';
import rmsEmployee from '../assets/images/rmeec-rms/rms_employee.png';
import rmsLog from '../assets/images/rmeec-rms/rms_log.png';
import rmsLogin from '../assets/images/rmeec-rms/rms_login.png';
import rmsPayroll from '../assets/images/rmeec-rms/rms_payroll.png';
import rmsProjectEmp from '../assets/images/rmeec-rms/rms_proj_emp.png';
import rmsProject from '../assets/images/rmeec-rms/rms_project.png';
import rmsSummary from '../assets/images/rmeec-rms/rms_summary.png';
import rmsTransaction from '../assets/images/rmeec-rms/rms_transaction.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="mb-2 mb-lg-5 pt-5">
      <div className="container pt-5">
        <h1 className="text-center p-0 m-0 pt-lg-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300" id="about_title">
          <span className="text-warning">P</span>ortfolio
        </h1>
        <div className="row mb-5 px-0 mx-0">
          <label className="col-12 text-muted m-0 p-0 mb-5 text-center" data-aos="fade" data-aos-delay="300" data-aos-duration="300">Check out my latest projects
          </label>

          <div className="col-12 col-lg-6 mb-5 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="400">
            <div className="portfolio-item rounded p-1 h-100 bg-dark">
              <div className="portfolio-link bg-dark">
                <div id="project_1" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={huremasHome} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Home Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasJob} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Job Section" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasLogin} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Login Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasDashboard} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Dashboard" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasEmployee} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Employee" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasTask} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Task Management" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasTraining} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Training Management" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasApplicant} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Applicant Tracking" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasPayroll} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Payroll Management" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasDocument} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - Document Management" />
                    </div>
                    <div className="carousel-item">
                      <img src={huremasUser} className="d-block w-100 img-fluid" alt="HUREMAS CVSUIC - User Management" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#project_1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#project_1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="portfolio-caption py-3 px-2 text-center bg-dark text-light">
                <div className="portfolio-caption-heading">HUREMAS - CVSUIC</div>
                <div className="text-center">
                  <p className="m-0">#Capstone Project #Group</p>
                </div>
                <div className="badge badge-html">Html</div>
                <div className="badge badge-css">CSS</div>
                <div className="badge badge-bs">Bootstrap</div>
                <div className="badge badge-php">PHP</div>
                <div className="badge badge-mysql">MySQL</div>
                <div className="badge badge-js">Javascript</div>
                <p className="pt-2 footer-text">A Human Resource Management System for Cavite State University - Imus. An HRMS, or human resources management system, is a suite of software applications used to manage human resources and related processes throughout the employee lifecycle.</p>
                <hr className="text-light" />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className="p-bottom pb-3">
                  <a target="_blank" href="https://github.com/imfranz25/huremas" className="text-light p-link" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-5 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="400">
            <div className="portfolio-item rounded p-1 h-100 bg-dark">
              <div className="portfolio-link bg-dark">
                <div id="project_2" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={syraLogin} className="d-block w-100 img-fluid" alt="SyraTech POS Login Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={syraHome} className="d-block w-100 img-fluid" alt="SyraTech POS - Home Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={syraEmployee} className="d-block w-100 img-fluid" alt="SyraTech POS - Employee Management" />
                    </div>
                    <div className="carousel-item">
                      <img src={syraPOSA} className="d-block w-100 img-fluid" alt="SyraTech POS A" />
                    </div>
                    <div className="carousel-item">
                      <img src={syraPOSB} className="d-block w-100 img-fluid" alt="SyraTech POS B" />
                    </div>
                    <div className="carousel-item">
                      <img src={syraPayroll} className="d-block w-100 img-fluid" alt="SyraTech POS - Payroll Management" />
                    </div>
                    <div className="carousel-item">
                      <img src={syraUser} className="d-block w-100 img-fluid" alt="SyraTech POS - User Management" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#project_2" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#project_2" data-bs-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="portfolio-caption py-3 px-2 text-center bg-dark text-light">
                <div className="portfolio-caption-heading">Syratech POS System</div>
                <div className="text-center"><p className="m-0">#Individual Project</p></div>
                <div className="badge badge-html">Html</div>
                <div className="badge badge-css">CSS</div>
                <div className="badge badge-php">PHP</div>
                <div className="badge badge-mysql">MySQL</div>
                <div className="badge badge-js">Javascript</div>
                <p className="pt-2 footer-text">A point of sale system, or POS, is a software where the customer makes a payment for the products or services at the store. This software includes employee, & user management as well as basic payroll and POS for cashier(s).</p>
                <hr className="text-light" />
              </div>
              <div className="d-flex justify-content-center mt-3 bg-dark">
                <div className="p-bottom pb-3">
                  <a target="_blank" href="https://github.com/imfranz25/syratech-pos-sys" className="p-link text-light" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a target="_blank" href="https://syratechpos.000webhostapp.com" className="p-link text-light" rel="noreferrer">
                    <i className="fa fa-globe m-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-5 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="400">
            <div className="portfolio-item rounded p-1 h-100 bg-dark">
              <div className="portfolio-link bg-dark">
                <div id="project_3" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={rmsLogin} className="d-block w-100 img-fluid" alt="RMEEC RMS - Login Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsDashboard} className="d-block w-100 img-fluid" alt="RMEEC RMS - Dashboard" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsEmployee} className="d-block w-100 img-fluid" alt="RMEEC RMS - Employee Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsProject} className="d-block w-100 img-fluid" alt="RMEEC RMS - Project Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsProjectEmp} className="d-block w-100 img-fluid" alt="RMEEC RMS - Project Employee Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsDtr} className="d-block w-100 img-fluid" alt="RMEEC RMS - Project DTR Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsPayroll} className="d-block w-100 img-fluid" alt="RMEEC RMS - Project Payroll Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsTransaction} className="d-block w-100 img-fluid" alt="RMEEC RMS - Transaction Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsSummary} className="d-block w-100 img-fluid" alt="RMEEC RMS - Project Summary Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsArchive} className="d-block w-100 img-fluid" alt="RMEEC RMS - Archive Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsLog} className="d-block w-100 img-fluid" alt="RMEEC RMS - Activity Log Page" />
                    </div>
                    <div className="carousel-item">
                      <img src={rmsAccount} className="d-block w-100 img-fluid" alt="RMEEC RMS - User Account Page" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#project_3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#project_3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="portfolio-caption py-3 px-2 text-center bg-dark text-light">
                <div className="portfolio-caption-heading">RMEEC - Record Management System</div>
                <div className="text-center"><p className="m-0">#Group Project</p></div>
                <div className="badge badge-python">Python (PyQt5 GUI)</div>
                <div className="badge badge-mysql">MySQL</div>
                <p className="pt-2 footer-text">Records Management system (RMS) is the management of records for an organization throughout the records-life cycle. The activities in this management include the systematic and efficient control of the creation, maintenance, and destruction of the records along with the business transactions associated with them. </p>
                <hr className="text-light" />
              </div>
              <div className="d-flex justify-content-center mt-3 bg-dark">
                <div className="p-bottom pb-3">
                  <a target="_blank" href="https://github.com/imfranz25/RMS-for-RMEEC" className="p-link text-light" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-5 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="400">
            <div className="portfolio-item rounded p-1 h-100 bg-dark">
              <div className="portfolio-link bg-dark">
                <img src={appletGible} className="d-block w-100 img-fluid" alt="Gible - Java Applet Project" />
              </div>
              <div className="portfolio-caption py-3 px-2 text-center bg-dark text-light">
                <div className="portfolio-caption-heading">Java Applet - Gible</div>
                <div className="text-center"><p className="m-0">#Individual Project</p></div>
                <div className="badge badge-html">Html</div>
                <div className="badge badge-java">Java</div>
                <p className="pt-2 footer-text">Java applets were small applications written in the Java programming language, or another programming language that compiles to Java bytecode, and delivered to users in the form of Java bytecode. This project is inspire in a Pokemon character named Gible (My favorite one). It has special feature where in it moves and fires a solar beam with my name displaying on it.</p>
                <hr className="text-light" />
              </div>
              <div className="d-flex justify-content-center mt-3 bg-dark">
                <div className="p-bottom pb-3">
                  <a target="_blank" href="https://github.com/imfranz25/Gible-Applet" className="p-link text-light" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio;