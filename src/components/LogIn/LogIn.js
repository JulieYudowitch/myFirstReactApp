import './LogIn.css';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className='login-container'>
            <div className='sign-in'>
                 <Link to="/SignIn"><button className='sign-in-button'>Sign in</button></Link>              
            </div>
            <div className='sign-up'>
                <p>don't have an account?</p>
                <button className='sign-up-button'>Create Account</button>
                <p>Sign up!</p>
            </div>
        </div>
    )
}

export default LogIn;