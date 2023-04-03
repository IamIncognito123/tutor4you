import React, {useState} from "react";
import {Link} from 'react-router-dom'
// import '../styling/Login.css'

export default function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => { setUsername(e.target.value)}
    const handlePassword = (e) => { setPassword(e.target.value)}
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with username and password
    };

    return(
        <div>
            <form className="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label for="username"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" value={username} onChange={handleUsername} required/>

                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" value={password} onChange={handlePassword} required/>

                <button type="submit">Login</button>
                <p className="signUp">Don't have an account? <Link to='/signup'className="signUpButton"><b>Sign Up</b></Link></p>
            </form>
            

        </div>
    )
}