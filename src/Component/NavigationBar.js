import React, { Fragment } from 'react';
import { Navbar, NavDropdown, Nav, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ListKeranjang from './ListKeranjang';

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
                <Navbar bg="primary" variant='dark' expand="lg">
                    <Navbar.Brand href="#home" className='text-white'><strong>UWeb</strong>Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className='text-white'>Desain Rumah</Nav.Link>
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
                </Navbar>
    
                <ListKeranjang handleClose={this.handleClose} showModal={this.state.showModal} dataKeranjang={this.props.dataKeranjang}></ListKeranjang>
            </Fragment>
        )
    }
}

export default NavigationBar;