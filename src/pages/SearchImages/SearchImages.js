import './SearchImages.css';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';

function SearchImages() {
    return (
        <div>
          <h2 className='promise'>Coming Soon!</h2>
        <p>Image Search</p>
        <a className='placeholderImage' href="https://ibb.co/dDBB1JM"><img src="https://i.ibb.co/5LTTtx4/james-harrison-vp-Oe-Xr5wm-R4-unsplash.jpg" alt="james-harrison-vp-Oe-Xr5wm-R4-unsplash" border="0"/></a>
        <div className='photos'>
          <PhotoSearch />
          </div>
        </div>
    )
}

export default SearchImages;