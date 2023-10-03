import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className='nav-left'>
                    <h2>Dinesh Soft <span>Tech</span></h2>
                </div>
                <div className='nav-right'>
                    <nav>
                        <ul className='navbar'>
                            <li>
                                <Link id='page' to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link id='page' to={"/courses"}>Courses</Link>
                            </li>
                            <li>
                                <Link id='page' to={"/about"}>About</Link>
                            </li>
                            <div >
                                <Link to={"/login"}>
                                <button className='loginbtn'>
                                    Login
                                </button>
                                </Link>
                                
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar