import './Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div>
            <div className='landing-page'>
              <h1 className='promise'>Coming Soon!</h1>
              <p className="posterB">A blog you can leave comments on</p>
            </div>
            <div className='header'>
              <Link to="/myFirstReactApp"><h1>Julie Yudowitch First React App</h1></Link>              
              <p className='description'>A work in progress</p>              
            </div>
        </div>
        
        
        
    )
}

export default Blog;