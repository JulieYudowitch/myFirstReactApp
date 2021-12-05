import './Shop.css';
import { Link } from 'react-router-dom';

function Shop() {
    return (
        <div className='landing-page'>
            <h1 className='promise'>Coming Soon!</h1>
                <div className='poster'>
                <p>A store where you will actually be able to buy things!</p>
                <p>Completely True Story...</p>
                <div className='header'>
              <Link to="/myFirstReactApp"><h1>Julie Yudowitch First React App</h1></Link>              
              <p className='description'>A work in progress</p>              
            </div>
            </div>
            
        </div>
    )
}

export default Shop;