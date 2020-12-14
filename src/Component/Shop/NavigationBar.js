import React, { Fragment } from 'react';
import { Navbar, NavDropdown, Nav, Button, Badge, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ListKeranjang from './ListKeranjang';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

    state = {
        showModal: false,
        jumlahPesan: 0
    }

    handleShow = () => {
        this.setState({
            showModal: true
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }


    render() {

        const jumlahPesan = this.props.dataKeranjang.reduce((result, item) => {
            return result + item.jumlahPesan
        }, 0)

        return(
            <Fragment>
                <Navbar bg="primary" variant='dark' expand="lg" className='navbar fixed-top'>
                    <Container>
                        <Navbar.Brand href="#home" className='text-white'><strong>UWeb</strong>Shop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className='text-white' as={Link} to='/'>Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-white'>
                            <NavDropdown.Item href="#action/3.1">Gambar AutoCad</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Gambar SketchUp</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://github.com/WibyFabian08">My github</NavDropdown.Item>
                            <NavDropdown.Item href="#">About Me</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Badge pill variant="danger" className='ml-5'>{jumlahPesan}</Badge>
                        <Button onClick={this.handleShow}>
                            <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon> Keranjang
                        </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    
                <ListKeranjang handleClose={this.handleClose} showModal={this.state.showModal} dataKeranjang={this.props.dataKeranjang} getListKeranjang={this.props.getListKeranjang} {...this.props}></ListKeranjang>
            </Fragment>
        )
    }
}

export default NavigationBar;