import './SignIn.css';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore';

function SignIn() {
    const [newUser, setNewUser] = useState('')
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');
    const usersCollectionRef = collection(db, 'users');

    function handleEmailChange(event) {
      setNewUser(event)
    }

    const createUser = async () => {
        await addDoc(usersCollectionRef, { email: newUser, password: password });
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers()
    }, [])

    return (
        <div className='sign-in-page'>
            <input placeholder='email' onChange={handleEmailChange}/>
            <input placeholder='password' />
            <input placeholder='re-enter password' />
            <button>Create Account</button>
        </div>
    )
}

export default SignIn;