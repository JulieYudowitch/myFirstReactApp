import './SearchImages.css';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';

function SearchImages() {
    return (
        <div className='image-search-page'>
        <h1>Image Search</h1>
        <p class='image-search-greeting'>Sometimes I like to just take a minute and look at pictures of cats.  What will you search for?</p>
          <div>          
            <PhotoSearch />
          </div>
        </div>
    )
}

export default SearchImages;