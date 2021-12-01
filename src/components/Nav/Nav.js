import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className='Header'>
              <h1>Julie Yudowitch First React App</h1>
              <p>A work in progress for learning by doing</p>
            </div>        
            <ul className='navBar'>
            <Link to="/SearchImages" className="item">Search Images</Link>
            <Link to="/Blog" className="item">Blog & Comments</Link>
            <Link to="/Shop" className="item">Shop</Link>
          </ul>
        </div>
    )
}

export default Nav;