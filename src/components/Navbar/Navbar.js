import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';

function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <div className='nav-bar'>
            <div className='leftside'>
                <div className='logo'>
                   <Link to='/myFirstReactApp'><img className='logo' src='https://i.ibb.co/jk5S5Tm/logotransp.png' alt='Logo for My First React App'/></Link>
                </div>
            </div>
           
            <div className='rightside'>
                <div className='nav-bar-links' id={showMobileNav ? 'hidden' : ''} onClick={() => setShowMobileNav(!showMobileNav)}>
                  <Link to="/myFirstReactApp" className='nav-link'>Home</Link>
                  <Link to="/PhotoSearch" className='nav-link'>Search Images</Link>
                  <Link to="/Blog" className='nav-link'>Picnic Blog</Link>
                  <Link to="/Shop" className='nav-link'>Shop</Link>
                  <Link to="/SignIn" className='nav-link'>Log In</Link>
                </div>
                <FcMenu className='mobile-menu-icon' onClick={() => setShowMobileNav(!showMobileNav)} />
            </div>
        </div>
    )
}

export default Navbar;