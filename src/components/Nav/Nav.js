import './Nav.css';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

function Nav() {
    return (
      <div>
        <div className='nav'>
          <MobileNav />
          <NavBar />
        </div>
               
      </div>
    )
}

export default Nav;