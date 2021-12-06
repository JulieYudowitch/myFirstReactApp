import './Nav.css';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                {
                    !open &&
                      <div className='mobile-nav-bar'>
                        <div>
                          <Link to='/myFirstReactApp' className="nav-link"><img className='logo' src='https://i.ibb.co/t8xNLGC/logotransp.png'/></Link>
                        </div>
                        <div>
                           <GrMenu className='burger-icon' size='40px' color='white' onClick={() => setOpen(!open)} />
                        </div>
                      </div>
                }
            </div>

            <div className='mobile-menu'>
                {
                    open &&
                      <div className='mobile-menu'>
                        <ul className='mobile-menu-ul'>
                          <Link to="/SearchImages" className="mobile-nav-link" onClick={() => setOpen(!open)}>Search Images</Link>
                          <Link to="/Blog" className="mobile-nav-link" onClick={() => setOpen(!open)}>Blog & Comments</Link>
                          <Link to="/Shop" className="mobile-nav-link" onClick={() => setOpen(!open)}>Shop</Link>
                        </ul>
                        <div>
                          <GrMenu className='burger-icon' size='40px' color='white' onClick={() => setOpen(!open)} />
                        </div>
                      </div>
                }
            </div>
        </div>



            
            
    )
}

export default MobileNav;