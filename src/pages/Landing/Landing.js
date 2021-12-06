import './Landing.css';

function Landing() {
    return (
        <div className='landing-page'>
            <div className='title'>
                <div>
                    <img className='logo-on-title' src='https://i.ibb.co/jk5S5Tm/logotransp.png'/>
                </div>
                <div className='description'>                                
                   <p>A work in progress</p>
                   <h1>By Julie Yudowitch</h1> 
                </div>                           
            </div>
            <div className='plans'>
                <h2 className='plans-title'>Plans for this App</h2>
                <p>Finish styling (I am actively working on this part -12/3/2021)</p>
                <p>Add functionality to existing pages</p>
                <p>User Login</p>
                <p>User settings including dark mode</p>
                <p>More pages</p>
                <p>& more!</p>
            </div>
        </div>
              
    )
}

export default Landing;