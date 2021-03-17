import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import '../css/login.css'
import logo from '../images/logo.png'

const Login = () => {
    return (
        <div className='login-cont'>
            <div className='login-wrapper'>
                <div className='login-head'>
                    <img src={logo} alt='logo'/>
                    {/* <h3>Login</h3> */}
                </div>
                <div className='login-content'>
                    <div className='lgn-mail'>
                    <label for="email">E-mail:</label>
                    <input type="email" placeholder='Enter you mail id' name='email' />
                    </div>
                    <div className='lgn-pwd'>
                    <label for="pwd">Password:</label>
                    <input placeholder='Enter you password' type="password" name='pwd' />
                    </div>
                    <div className='login-submit'>
                    <input id='lgn-submit' type="submit" value='Login' />
                    </div>

                    <LinkContainer to='/signup'>
                    <div className='sgnup-redirect'>
                        <p>Not an User? <span className='sng-link'>Sign Up!</span></p>
                    </div>
                    </LinkContainer>
                </div>
            </div>
        </div>
    )
}

export default Login
