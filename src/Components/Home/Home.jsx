import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import logo from '../LandingPage/logo512.png';
import './Home.css';

function Home() {
  return (
    <div className="containerHome">
      <Nav />
      <Link to='/Home'>
        <button className="buttonImg">
        <img src={logo} className="AppLogo" alt="logo" />
        </button>
      </Link>
    </div>
  );
}

export default Home;