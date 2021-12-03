import './Nav.css';
import { Link } from 'react-router-dom';

function NavLinks() {
    return (
      <ul className='navlinks'>
        <Link to="/SearchImages" className="item" >Search Images</Link>
        <Link to="/Blog" className="item">Blog & Comments</Link>
        <Link to="/Shop" className="item">Shop</Link>
      </ul>
    )
}

export default NavLinks;