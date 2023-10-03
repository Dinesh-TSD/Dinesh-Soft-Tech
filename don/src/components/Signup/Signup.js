import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Signup.css"
import axios from 'axios'


const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')
                }
                else {
                    alert("Error");
                }
            })
            .then(err => console.log(err));
    };

    return (
        <>
            <div className='Register'>
                <form className='form-r' onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='name'>Name</label>
                        <input
                            type='text'
                            className='form-input-r'
                            id='name'
                            name='name'
                            placeholder='Enter your name'
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='form-input-r'
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <div className='form-inputs-r'>
                        <label className='form-label-r' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-input-r'
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange={e => setValues({ ...values, password: e.target.value })}
                        />
                    </div>

                    <button className='form-input-btn-r'>
                        Sign In
                    </button>
                    <span className='form-new-user-r'>
                        Already have an account? Login
                    </span>
                    <button className='form-input-btn-r'>
                        <Link className='sign-link-r' to={"/login"}> Login</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup