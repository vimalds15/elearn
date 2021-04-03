import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//importing images
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header-cont">
      <Navbar className="headr" sticky="top" bg="dark" expand='lg' variant='dark'>
        <div className='header-left'>

          <LinkContainer to='/'>
          <Navbar.Brand >
            <img className="header-logo" src={logo} alt="SRM" />
            </Navbar.Brand>
            </LinkContainer>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="mt-10">
          <div className="header-right">
            <Nav className="mr-auto ">
              <Nav.Link href="#">
                <i className="fas fa-cog"></i> Filter
              </Nav.Link>

            <LinkContainer to='/login' >
                <Nav.Link target="_" href="#">
                    <i className="fas fa-user"></i> Login/Sign-Up
                </Nav.Link>
            </LinkContainer>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
