import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  
  const [open, setOpen] = useState(false);

    return (
      <div className='nav-bar'>
        <div className='logo'>
          <Link to='/myFirstReactApp'><img className='logo' src='https://i.ibb.co/jk5S5Tm/logotransp.png' alt='Logo for My First React App'/></Link>
        </div>
        <div className='nav-links'>
          <ul className='nav-links'>
            <Link to="/myFirstReactApp" className="nav-link" onClick={() => setOpen(!open)}>Home</Link>
            <Link to="/PhotoSearch" className="nav-link" onClick={() => setOpen(!open)}>Search Images</Link>
            <Link to="/Blog" className="nav-link" onClick={() => setOpen(!open)}>Picnic Blog</Link>
            <Link to="/Shop" className="nav-link" onClick={() => setOpen(!open)}>Shop</Link>
            <Link to="/SignIn" className="nav-link" onClick={() => setOpen(!open)}>Log In</Link>
          </ul>
        </div>
      </div>
    )
}

export default NavBar;

