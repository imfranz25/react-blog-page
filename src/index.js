// native imports
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
//styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/index.css';
import './css/main.scss';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

