import './Nav.css';
import NavLinks from './NavLinks';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';

function MobileNav() {
    const [open, setOpen] = useState(true);

    return (
        <nav className='mobilenav'>
          <GrMenu className='menu' size='40px' color='white' onClick={() => setOpen(!open)}/>
          {open && <NavLinks />}
        </nav>
    )
}

export default MobileNav;