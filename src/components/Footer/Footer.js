import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className='row'>
                    {/*Column 1 */}
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul>
                            <li>info</li>
                            <li>info</li>
                            <li>info</li>
                        </ul>
                    </div>                    
                </div>
                <div classsName='copyright'>
                    <p>&copy;{new Date().getFullYear()} Julie Yudowitch | All rights reserved</p>
                </div>
            </div>    
        </div>
    )
}

export default Footer;