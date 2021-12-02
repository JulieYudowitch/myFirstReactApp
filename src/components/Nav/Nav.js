import './Nav.css';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

function Nav() {
    return (
        <div>
            <div className='Header'>
              <Link to="/myFirstReactApp"><h1>Julie Yudowitch First React App</h1></Link>              
              <p>A work in progress for learning by doing</p>
            </div>
            <div className='nav'>
              <MobileNav />
              <NavBar />
            </div>
            
        </div>
    )
}

export default Nav;