import React from 'react'
import '../css/footer.css'
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div className='footer-cont'>
            <div className='footer-wrapper'>
                <div className='footer-det'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='footer-contact'>

                </div>
            </div>
            <div className='footer-cpyright'>
                &copy; 2021. All rights reserved. Designed & developed by Anto Vimalan.
            </div>
        </div>
    )
}

export default Footer
