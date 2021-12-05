import './Nav.css';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='mobilenav'>
            <GrMenu className='menu' size='40px' color='white' onClick={() => setOpen(!open)}/>
            {open &&
                <ul className='navlinks'>
                  <Link to="/SearchImages" className="item" onClick={() => setOpen(!open)}>Search Images</Link>
                  <Link to="/Blog" className="item" onClick={() => setOpen(!open)}>Blog & Comments</Link>
                  <Link to="/Shop" className="item" onClick={() => setOpen(!open)}>Shop</Link>
                </ul>}
        </nav>
    )
}

export default MobileNav;