import { Link } from 'react-router-dom';
import logo from './logo512.png';
import './LandingPage.css';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to='/Home'>
        <button className="button">
        <img src={logo} className="App-logo" alt="logo" />
        </button>
      </Link>
        <p>
         Click to enter the App
        </p>
      </header>
    </div>
  );
}

export default Landing;
