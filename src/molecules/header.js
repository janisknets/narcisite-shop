import React from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import logot from './images/accessories.jpg';

export default function Header () {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Container>
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
                <Navbar.Collapse id="responsive-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/" >Goods</Nav.Link>
                    <Nav.Link href="/" >Contacts</Nav.Link>
                    <Nav.Link href="/" >About us</Nav.Link>
                </Nav>
                <Form inline >
                    <Form control 
                        type="text"
                        placeholder="search"
                        className="mr-sm-2"
                    />
                </Form>
                <Button variant="outline-info">Search</Button>
            </Container>
        </Navbar>
    )
    }


