import './SearchImages.css';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';
import { Link } from 'react-router-dom';

function SearchImages() {
    return (
        <div className='landing-page'>
          <h2 className='promise'>Coming Soon!</h2>
          <p>Image Search</p>          
          <div className='photo-results'>          
            <PhotoSearch />
        </div>
        <div className='header'>
              <Link to="/myFirstReactApp"><h1>Julie Yudowitch First React App</h1></Link>              
              <p className='description'>A work in progress</p>              
            </div>
        </div>
    )
}

export default SearchImages;