import React from 'react';
import { Navbar, Row, Col, Image, Button, FormControl, Form, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../Component/Umum/NavigationBar';

class LandingPage extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className='header'>
                    <NavigationBar {...this.props}></NavigationBar>
                </div>
                <div className='body'>
                    <Row>
                        <Col className='mt-5'>
                            <p className="display-1"><strong>We Create We Built</strong></p>
                            <p className="text-secondary mt-2 text-justify">
                                We are here to serve you from online shopping to give you inspiration in making your dream home. We are ready to serve you in the midst of this pandemic by providing easy and fast service, you just have to sit at home and we are ready to serve your needs.
                            </p>
                            <Button variant="outline-secondary mt-2" as={Link} to='/home'>
                                Get Started
                            </Button>
                        </Col>
                        <Col className='mt-5'>
                        <Image src='asset/images/cart.png' width='600'></Image>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
 }

 export default LandingPage;