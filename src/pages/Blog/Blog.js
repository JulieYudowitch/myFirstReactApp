import './Blog.css';

function Blog() {
    return (
        <div>
            <div className='blog-page'>
                <h1>Julie Yudowitch Picnic Blog</h1>
                <div className='blog-container'>
                    <ul className='blog-entry-menu'>
                        <li className='picnic'>
                            <h5>Lorem Sandwich</h5>
                            <p>Lorem ipsum dolor sit amet</p>                                             
                        </li>
                        <li className='picnic'>
                            <h5>ipsum soup</h5>
                            <p>Ut enim ad minim veniam</p>
                        </li>
                        <li className='picnic'>
                            <h5>dolar pizza</h5>
                            <p>consectetur adipiscing elit</p>
                        </li>                        
                        <li className='picnic'>
                            <h5>sit amet pasta</h5>
                            <p>sed do eiusmod tempor</p>
                        </li>                        
                    </ul>
                    <div className='blog-entry' >
                        <h3 >Picnic Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className='comments-container'>
                  <h3>Would you try this picnic idea? Comment below!</h3>
                </div>              
            </div>            
        </div>
        
        
        
    )
}

export default Blog;