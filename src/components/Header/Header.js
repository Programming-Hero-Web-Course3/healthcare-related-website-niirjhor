import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                    <Nav className="me-auto px-3">
                        <NavLink className='navlists'
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink className='navlists'
                            to="/services"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Services
                        </NavLink>
                        <NavLink className='navlists'
                            to="/Login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Login
                        </NavLink>

                    </Nav>
                    <Navbar.Brand>Sign in as: </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;