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
                  <div className='footer-info'>
                    <div  className='email' >
                      <a  className='email'  href='mailto:julieyudo@gmail.com' target='_blank'>JulieYudo@gmail.com</a>                            
                    </div>
                    <div>
                      
                    </div>
                  </div>
                  <p className='copyright'>&copy;{new Date().getFullYear()} Julie Yudowitch | All rights reserved</p>
                </div>
            </footer> 
        </div>   
    )
}

export default Footer;