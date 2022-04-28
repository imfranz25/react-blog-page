import {Link} from 'react-router-dom';
import './../css/components/NavBar.scss';

const NavBar = () => (
  <nav className='container fixed-top'>
    <div className='row'>
      <div className='col-md-9'>
        Brand
      </div>
      <div className='col-md-9'>
        <button className='p-3 border border-secondary'>Subscribe</button>
        <button className='p-3 text-white bg-dark'>Compose Blog</button>
      </div>
    </div>
    <ul>
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