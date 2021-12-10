import './SearchImages.css';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';

function SearchImages() {
    return (
        <div className='image-search-page'>
          <h1>Image Search</h1>
          <div>          
            <PhotoSearch />
          </div>        
        </div>
    )
}

export default SearchImages;