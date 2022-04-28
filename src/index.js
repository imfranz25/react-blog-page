import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// STYLES
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// CUSTOM STYLES
import './css/components/NavBar.scss';
import './css/components/SideBar.scss';
import "./css/HomePage.scss";


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);