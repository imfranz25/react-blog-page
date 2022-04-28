import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav className='container fixed-top nav-container'>
    <div className='row py-5'>
      <div className='col-md-7 blog-brand'>
        <h1 className='brand-logo'>fR@nz BlogPage</h1>
      </div>
      <div className='col-md-5'>
        <button className='px-5 py-3 border border-secondary btn btn-light mx-3 header-btn'>Subscribe</button>
        <button className='px-5 py-3 text-white btn btn-dark mx-3 header-btn'>Create Blog</button>
      </div>
    </div>
    <ul className='p-0 py-3 nav-list'>
      <li>
        <Link to="/" className='navi-link me-4'>Home</Link>
      </li>
      <li>
        <Link to="/about" className='navi-link me-4'>About</Link>
      </li>
      <li>
        <Link to="/articles-list" className='navi-link me-4'>Articles</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar;