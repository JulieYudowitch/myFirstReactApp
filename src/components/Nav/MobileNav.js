import './Nav.css';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='mobile-nav'>
                <div>
                  <Link to='/myFirstReactApp' className="nav-link" onClick={() => setOpen(!open)}><img className='logo' src='https://i.ibb.co/hXMpJPr/logotransp.png'/></Link>
                </div>
                <div>
                  <GrMenu className='burger-icon' size='40px' color='white' onClick={() => setOpen(!open)} />
                </div>
          </div>
          <div  className='mobile-menu'>                
            {open &&
                <ul className='mobile-menu-ul'>
                  <Link to='/myFirstReactApp' className="mobile-nav-link" onClick={() => setOpen(!open)}>Home</Link>
                  <Link to="/SearchImages" className="mobile-nav-link" onClick={() => setOpen(!open)}>Search Images</Link>
                  <Link to="/Blog" className="mobile-nav-link" onClick={() => setOpen(!open)}>Blog & Comments</Link>
                  <Link to="/Shop" className="mobile-nav-link" onClick={() => setOpen(!open)}>Shop</Link>
                </ul>}
            </div>
        </div>
            
            
    )
}

export default MobileNav;