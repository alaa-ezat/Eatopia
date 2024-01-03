import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navs.css'
import logo from '../../assets/logo.png'


function Navs() {
return (
<Navbar expand="lg">
    <Navbar.Brand href="#home">
        <img src={logo} alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="../aboutus">ABOUT US</Nav.Link>
            <Nav.Link href="../menu"> MENU</Nav.Link>
            <Nav.Link id="last-nav" href="../reservation">RESERVATIONS</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
)
}

export default Navs;