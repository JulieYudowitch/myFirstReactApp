import './Nav.css';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

function Nav() {
    return (
      <div>
        <div className='nav'>
              <MobileNav />
              <NavBar />            
              <div className='header'>
                <Link to="/myFirstReactApp"><h1>Julie Yudowitch First React App</h1></Link>              
                <p className='description'>A work in progress</p>
              </div>
        </div>           
      </div>
    )
}

export default Nav;