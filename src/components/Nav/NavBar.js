import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='navbar'>
          <ul className='navlinks'>
                  <Link to="/SearchImages" className="item" onClick={() => setOpen(!open)}>Search Images</Link>
                  <Link to="/Blog" className="item" onClick={() => setOpen(!open)}>Blog & Comments</Link>
                  <Link to="/Shop" className="item" onClick={() => setOpen(!open)}>Shop</Link>
                </ul>
        </nav>
    )
}

export default NavBar;