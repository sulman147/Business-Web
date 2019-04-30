
import React from 'react';
import { Navbar , Nav ,Form ,FormControl } from 'react-bootstrap' ;
import { NavLink} from 'react-router-dom';
import  '../../styles/styles.scss';
import Button from 'react-bootstrap/Button';

const Style = {
    backgroundColor:'rgb(255, 196, 35)',
    
  };
const  Header = () => (
    <div>
        <div className="Logo-box">
            <span className="logo">
                <img src="http://aci.com.pk/images/header/akbari_logo.png" width="100%" height="100%"/>
            </span>
            <div className="InfoBox">
               <h3>info@aci.com.pk</h3>
               <Button variant="warning">REQUEST A QUOTE</Button>
            </div>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand  to="/">CHEMICAL WEB</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" activeClassName="is-active" exact= {true} className="headNav">HOME </NavLink>
                    <NavLink to="/About" activeClassName="is-active" className="headNav">ABOUT US</NavLink>
                    <NavLink to="/Products" activeClassName="is-active" className="headNav">PRODUCTS</NavLink>
                    <NavLink to="/Groupcompanies" activeClassName="is-active" className="headNav"> GROUP COMPANIES</NavLink>
                    <NavLink to="/ContactUs" activeClassName="is-active" className="headNav"> CONTACT US</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>     
    </div>
);

export default Header;