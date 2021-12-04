import './SearchImages.css';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';
function SearchImages() {
    return (
        <div className='landing-page'>
          <h2 className='promise'>Coming Soon!</h2>
          <p>Image Search</p>          
          <div className='photo-results'>          
            <PhotoSearch />
          </div>
        </div>
    )
}

export default SearchImages;