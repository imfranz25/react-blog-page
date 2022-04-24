import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
//styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/index.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

