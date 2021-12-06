import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
      <div className='nav-bar'>
        <Link to='/myFirstReactApp' className="nav-link"><img className='logo' src='https://i.ibb.co/kctZk8q/logotransp.png'/></Link>        
        <ul className='nav-links'>
          <Link to="/SearchImages" className="nav-link" onClick={() => setOpen(!open)}>Search Images</Link>
          <Link to="/Blog" className="nav-link" onClick={() => setOpen(!open)}>Blog & Comments</Link>
          <Link to="/Shop" className="nav-link" onClick={() => setOpen(!open)}>Shop</Link>
        </ul>
      </div>
    )
}

export default NavBar;