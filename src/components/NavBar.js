import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav className='container fixed-top nav-container'>
    <div className='row py-5'>
      <div className='col-md-7 blog-brand'>
        <h1>fRanz Blog</h1>
      </div>
      <div className='col-md-5'>
        <button className='px-5 py-3 border border-secondary btn btn-light mx-3 header-btn'>Subscribe</button>
        <button className='px-5 py-3 text-white btn btn-dark mx-3 header-btn'>Create Blog</button>
      </div>
    </div>
    <ul className='nav-list'>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/articles-list">Articles</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar;