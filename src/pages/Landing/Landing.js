import './Landing.css';
import LogIn from '../../components/LogIn/LogIn';

function Landing() {
    return (
      <div className='landing-page'>
        
        <span className='space'>.</span>
        
        <div className='page-title'>
              <div>
                  <img className='logo-on-title' src='https://i.ibb.co/jk5S5Tm/logotransp.png' alt='Logo for My First React App'/> 
              </div>
              <div className='description'>                                
                <p>A work in progress</p>
                <h1>By Julie Yudowitch</h1> 
              </div>          
          </div>
        
          <div className='login'>
            <LogIn />
          </div>
        
      </div>
              
    )
}

export default Landing;