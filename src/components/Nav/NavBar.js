import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
      <div className='nav-bar'>
        <div className='logo'>
          <Link to='/myFirstReactApp'><img className='logo' src='https://i.ibb.co/jk5S5Tm/logotransp.png'/></Link>
        </div>
        <div className='nav-links'>
          <ul className='nav-links'>
            <Link to="/SearchImages" className="nav-link" onClick={() => setOpen(!open)}>Search Images</Link>
            <Link to="/Blog" className="nav-link" onClick={() => setOpen(!open)}>Blog & Comments</Link>
            <Link to="/Shop" className="nav-link" onClick={() => setOpen(!open)}>Shop</Link>
          </ul>
        </div>
      </div>
    )
}

export default NavBar;