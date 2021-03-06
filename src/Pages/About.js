import React from 'react';
import NavigationBar from '../Component/Umum/NavigationBar';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import Copyright from '../Component/Umum/Copyright';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

class About extends React.Component {
    render() {
        return (
            <Container className='text-center'>
                <div className="header">
                    <NavigationBar></NavigationBar>
                </div>
                <div className="body mt-3 bg-light">
                    <h1>Hello There</h1>
                    <Image className='shadow' src="asset/images/me.png" roundedCircle />
                    <p className='mt-3 text-secondary'>
                        Hello friends, my name is Wiby Fabian Rianto, I am a student from Sekolah Tinggi Teknologi Garut, and this is my first website project, I realize that the website I have created is far from perfect, I hope this website can be created motivates me to continue to make better work and of course be useful for people around me.
                    </p>
                        <Button variant="outline-secondary" href='https://www.instagram.com/wiby_fabian/?hl=id'>More</Button>
                </div>
                <div className='footer mt-3 bg-light'>
                    <Row>
                        <Col>
                            <h4>Contact Me</h4>
                            <h6 className='text-secondary'>FaceBook</h6>
                            <h6 className='text-secondary'>Intagram</h6>
                            <h6 className='text-secondary'>Github</h6>
                        </Col>
                        <Col>
                            <h4>Experience</h4>
                            <h6 className='text-secondary'>Drafter</h6>
                            <h6 className='text-secondary'>Field Crew</h6>
                        </Col>
                        <Col>
                            <h4>
                                Educational Background
                            </h4>
                            <h6 className='text-secondary'>SD Bayongbong 2</h6>
                            <h6 className='text-secondary'>Smp 1 Bayongbong</h6>
                            <h6 className='text-secondary'>Smk 9 Garut</h6>
                        </Col>
                    </Row>
                </div>
                <Copyright></Copyright>
            </Container>
        )
    }
}

export default About;