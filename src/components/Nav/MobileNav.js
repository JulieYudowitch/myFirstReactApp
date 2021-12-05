import './Nav.css';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className='mobilenav'>
                <div className='mobilenav'>
                  <GrMenu className='menu' size='40px' color='white' onClick={() => setOpen(!open)} />
              {open &&
                <ul>
                  <Link to='/myFirstReactApp' className="nav-link" onClick={() => setOpen(!open)}>Home</Link>
                  <Link to="/SearchImages" className="nav-link" onClick={() => setOpen(!open)}>Search Images</Link>
                  <Link to="/Blog" className="nav-link" onClick={() => setOpen(!open)}>Blog & Comments</Link>
                  <Link to="/Shop" className="nav-link" onClick={() => setOpen(!open)}>Shop</Link>
                </ul>}
                </div>
            </div>
    
        </nav>
            
            
    )
}

export default MobileNav;