import './Blog.css';

function Blog() {
    return (
        <div>
            <div className='blog-page'>
                <h1>Julie Yudowitch Food Blog</h1>
                <div className='blog-container'>
                    <ul className='blog-entry-menu'>
                        <li className='recipe'>BLTFMB (BLT with fresh mozz & basil</li>
                        <li className='recipe'>Some Other Recipe</li>
                        <li className='recipe'>Some Other Other Recipe</li> 
                    </ul>
                    <div className='blog-poster' >
                        <h3 >Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                
              
            </div>            
        </div>
        
        
        
    )
}

export default Blog;