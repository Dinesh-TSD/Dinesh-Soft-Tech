import React from 'react'

import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {

    return (
        <>
            <div className='Login'>
                <form className='form'>
                    <h1>Login</h1>
                    <div className='form-inputs'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-input'
                           
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            
                        />
                      
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-input'
                           
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                          
                        />
                       
                    </div>
                    <button className='form-input-btn'>
                        Login
                    </button>
                    <span className='form-new-user'>
                        Don't have an account? Sign in 
                    </span>
                    <button className='form-input-btn'>
                       <Link className='sign-link' to={"/signup"}> Sign In</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login