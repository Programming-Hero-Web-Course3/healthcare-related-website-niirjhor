import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='text-warning'>Specialised</span> Diagonisic Center</Navbar.Brand>

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
                            to="/callAmbulance"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Call An Ambulance
                        </NavLink>
                        <NavLink className='navlists'
                            to="/reviews"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Reviews
                        </NavLink>

                        {user?.email ?
                            <Button className='ms-5' onClick={logOut} variant="light">Logout</Button> :
                            <NavLink className='navlists'
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Login or Register
                            </NavLink>}
                        <Navbar.Text className='ms-5'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;