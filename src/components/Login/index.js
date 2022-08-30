import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>
        <div className='login-container'>
            <h1 className='login-header'>
                Log In
            </h1>
            <form className='login-form'>
                <h5 className='login-headerFive'>
                    Email
                </h5>
                <input className='login-textInput' type='text' />

                <h5 className='login-headerFive'>
                    Password
                </h5>
                <input className='login-textInput' type='password' />

                <button className='login-signInButton'>Login</button>

                <p className='login-p'>
                  By signing in you agree to the terms and conditions of my AMAZON CLONE.
                </p>

                <button className='login-registerButton'>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login