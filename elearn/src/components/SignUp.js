import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import '../css/signup.css'
import logo from '../images/logo.png'

const SignUp = () => {
    return (
        <div className='sgn-cont'>
            <div className='sgn-wrapper'>
                <div className='sgn-head'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='sgn-content'>
                    <form>
                    <div className='sgn-mail'>
                    <label for="email">E-mail:</label>
                    <input type="email" placeholder='Enter you mail id' name='email' required/>
                    </div>
                    <div className='sgn-pwd'>
                    <label for="pwd">Password:</label>
                    <input placeholder='Enter you password' type="password" name='pwd' required/>
                    </div>
                    <div className='sgn-pwd1'>
                    <label for="pwd">Confirm Password:</label>
                    <input placeholder='Re-enter you password' type="password" name='pwd' required />
                    </div>
                    <div className='sgn-submit'>
                    <input id='lgn-submit' type="submit" value='Sign Up' />
                    </div>
                    </form>

                    <LinkContainer to='/login'>
                    <div className='login-redirect'>
                        <p>Already an User? <span className='sng-link'>Login!</span></p>
                    </div>
                    </LinkContainer>
                </div>
            </div>
        </div>
    )
}

export default SignUp