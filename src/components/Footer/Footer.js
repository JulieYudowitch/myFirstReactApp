import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className='row'>
                    {/*Column 1 */}
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul className='list-unstyled'>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul className='list-unstyled'>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Footer Stuff</h4>
                        <ul className='list-unstyled'>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                        </ul>
                    </div>                    
                </div>
                <div>
                    <p classNAme='col-sm'>&copy;{new Date().getFullYear()} Julie Yudowitch | All rights reserved</p>
                </div>
            </div>    
        </div>
    )
}

export default Footer;