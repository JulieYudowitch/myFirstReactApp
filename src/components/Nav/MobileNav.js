import './Nav.css';
import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='mobile-nav-bar'>
                {
                    !open &&
                      <div className='mobile-nav-bar'>
                        <div>
                            <Link to='/myFirstReactApp' className="mobile-nav-link" ><img className='logo' src='https://i.ibb.co/jk5S5Tm/logotransp.png' alt='Logo for My First React App'/></Link>                                      
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
                    <div>
                        <div className='mobile-menu-ul'>
                          <ul>
                            <li><Link to="/myFirstReactApp" className="mobile-nav-link" onClick={() => setOpen(!open)}>Home</Link></li>
                            <li><Link to="/SearchImages" className="mobile-nav-link" onClick={() => setOpen(!open)}>Search Images</Link></li>
                            <li><Link to="/Blog" className="mobile-nav-link" onClick={() => setOpen(!open)}>Picnic Blog</Link></li>
                            <li><Link to="/Shop" className="mobile-nav-link" onClick={() => setOpen(!open)}>Shop</Link></li>
                            <li><Link to="/SignIn" className="mobile-nav-link" onClick={() => setOpen(!open)}>Log In</Link></li>
                          </ul>
                        </div>
                        
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