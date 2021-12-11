import './Blog.css';

function Blog() {
    return (
        <div>
            <div className='blog-page'>
                <div className='blog-container'>
                    <ul className='blog-entry-menu'>
                        <li className='picnic'>
                            <h5>Lorem ipsum</h5>                                             
                        </li>
                        <li className='picnic'>
                            <h5>ipsum veniam</h5>
                        </li>
                        <li className='picnic'>
                            <h5>dolar consectetur</h5>
                        </li>                        
                        <li className='picnic'>
                            <h5>sit amet tempor</h5>
                        </li>                        
                    </ul>
                    <div className='blog-entry' >
                        <h3 >Picnic Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className='comments-container'>
                    <h3 className='comments'>Would you try this picnic idea? Comment below!</h3>
                    <input className='comments' placeholder='comment here'/>
                </div>              
            </div>            
        </div>
        
        
        
    )
}

export default Blog;