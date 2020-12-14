import React from 'react';
import { Navbar, Row, Col, Image, Button, FormControl, Form, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><strong>UWeb</strong>Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className='text-dark' as={Link} to='/'>Home</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-white'>
                    <NavDropdown.Item href="#action/3.1">Gambar AutoCad</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Gambar SketchUp</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/WibyFabian08">My github</NavDropdown.Item>
                    <NavDropdown.Item href="#">About Me</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;