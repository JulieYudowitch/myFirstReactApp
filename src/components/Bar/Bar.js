import './Bar.css';
import { Link } from 'react-router-dom';

function Bar() {
    return (
        <div className='bar'>
            <div className='leftside'>
                <div className='logo'>
                   <Link to='/myFirstReactApp'><img className='logo' src='https://i.ibb.co/jk5S5Tm/logotransp.png' alt='Logo for My First React App'/></Link>
                </div>
            </div>
           
            <div className='rightside'>
                <div className='bar-links'>
                  <Link to="/myFirstReactApp" className='link'>Home</Link>
                  <Link to="/PhotoSearch" className='link'>Search Images</Link>
                  <Link to="/Blog" className='link'>Picnic Blog</Link>
                  <Link to="/Shop" className='link'>Shop</Link>
                  <Link to="/SignIn" className='link'>Log In</Link>
                </div>
              
            </div>
        </div>
    )
}

export default Bar;