import './Nav.css';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

function Nav() {
    return (
      <div>
        <nav className='header'>          
          <MobileNav />
          <NavBar />
        </nav>               
      </div>
    )
}

export default Nav;