import './Landing.css';
import { GiCheckMark } from 'react-icons/gi';

function Landing() {
    return (
        <div className='landing-page'>
            <div className='title'>
                <div>
                   <img className='logo-on-title' src='https://i.ibb.co/jk5S5Tm/logotransp.png' alt='Logo for My First React App'/> 
                </div>
                <div className='description'>                                
                   <p>A work in progress</p>
                   <h1>By Julie Yudowitch</h1> 
                </div>
            </div>
            <div className='plans'>
                <h2 className='plans-title'>Plans for this App</h2>
                <div className='finished-task'>
                    <div>
                      <GiCheckMark className='checkmark' size='40px' color='white' />
                    </div>
                    <div>
                      <p className='finsished-task-title'>Finish styling</p>
                    </div>                  
                </div>
                <div class='update'>
                  <p >-12/3/2021 I am actively working on this part</p>
                  <p>-12/7/2021 I'm moving on from styling for now but will come back to improve it later</p>
                </div>
                <p>Add functionality to existing pages</p>
                <p>User settings including dark mode</p>
                <p>More pages</p>
                <p>& more!</p>
            </div>
        </div>
              
    )
}

export default Landing;