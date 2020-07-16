import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logot from '../logo.svg';

 function Navigation () {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                <Navbar.Brand href='/'>
                    <img
                    src={logot}
                    height="70"
                    width="70"
                    className="d-inline-block align-right"
                    alt="logo" 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" >Home</Link>
                    <Link to="/products" >Products</Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
          </Navbar.Collapse> 
        </Navbar>
      </>
    )
    }

export default Navigation;
