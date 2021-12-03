import './Footer.css';
import Social from '../Social/Social';

function Footer() {
    return (
        <div>
            <footer>
                <div className='container' >
                  <div className='social-links'>
                    <Social />
                  </div>
                  <p classsName='copyright'>&copy;{new Date().getFullYear()} Julie Yudowitch | All rights reserved</p>
                </div>
            </footer> 
        </div>   
    )
}

export default Footer;