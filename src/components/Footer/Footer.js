import './Footer.css';
import Social from '../Social/Social';

function Footer() {
    return (
        
            <div className='container'>
                <div className='row'>
                    {/*Column 1 */}
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul>
                            <li>info</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul>
                            <li>info</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul>
                            <li>info</li>
                        </ul>
                    </div>                    
                </div>
                <div>
                  <Social />
                  <p classsName='copyright'>&copy;{new Date().getFullYear()} Julie Yudowitch | All rights reserved</p>
                </div>
            </div>    
        
    )
}

export default Footer;