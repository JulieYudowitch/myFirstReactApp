import './Nav.css';
import MobileNav from './MobileNav';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <div>
        <div>          
          <MobileNav />
          <NavBar />
        </div>
               
      </div>
    )
}

export default Nav;