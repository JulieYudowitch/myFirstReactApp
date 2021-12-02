import classes from './Nav.css';
import './Nav.css';
import NavLinks from './NavLinks';

function NavBar() {
    return (
        <nav className={classes.navbar}>
          <NavLinks />
        </nav>
    )
}

export default NavBar;