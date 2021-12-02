import classes from './Nav.css';
import './Nav.css';
import NavLinks from './NavLinks';
import { GrMenu } from 'react-icons/gr';

function MobileNav() {
    return (
        <nav className={classes.mobilenav}>
          <GrMenu className='menu' size='40px' color='white'/>
          <NavLinks />
        </nav>
    )
}

export default MobileNav;