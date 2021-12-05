import './SearchImages.css';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';

function SearchImages() {
    return (
        <div className='image-search-page'>
          <h1>Coming Soon!</h1>
          <p>Image Search</p>          
          <div className='photo-results'>          
            <PhotoSearch />
          </div>
        </div>
    )
}

export default SearchImages;