import React from 'react'
import { Navbar,Nav,} from 'react-bootstrap'

//importing images
import logo from '../images/logo.png'


const Header = () => {
    return (
        <div className='header-cont'>
        <Navbar className='headr' sticky='top' bg="light" expand="lg">
        <div>
            <Navbar.Brand href="#"><img className='header-logo' src={logo} alt="SRM" /></Navbar.Brand>
        </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
        <Navbar.Collapse id="basic-navbar-nav" className="mt-10">
        <div className='header-right'>
          <Nav className="mr-auto ">
            <Nav.Link href="#"><i className="fas fa-cog"></i> Filter</Nav.Link>
          <Nav.Link target='_' href="#"><i className="fas fa-user"></i> Login/Sign-Up</Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header


