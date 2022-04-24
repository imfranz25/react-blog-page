
const Header = () => (
  // <!-- Header - Menu -->
	<header>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top ok" id="nav-top">
      <div className="container-fluid mx-3">
        <a className="navbar-brand" href="#home">Francis Ong</a>
        {/* <!-- Toggle (For Small Devices) --> */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#options" aria-controls="options" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Selections --> */}
        <div className="collapse navbar-collapse" id="options">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header;