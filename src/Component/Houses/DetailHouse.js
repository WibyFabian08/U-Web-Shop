import React from 'react';
import { Modal, Button, Row, Col, Image, ListGroup } from 'react-bootstrap';

class DetailHouse extends React.Component {
    render() {
        if(this.props.dataDetailRumah) {
            return(
                <Modal show={this.props.showDetail} onHide={this.props.handleClose} animation={false} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Detail House</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Image src={'asset/images/Denah/' + this.props.dataDetailRumah.detail.denah} width='400' className='ml-4'></Image>
                            </Col>
                            <Col className='mr-4'>
                                <ListGroup >
                                    <ListGroup.Item>
                                        <strong>Luas Tanah :</strong> {this.props.dataDetailRumah.detail.luas_tanah} m2
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Luas Bangunan :</strong> {this.props.dataDetailRumah.detail.luas_bangunan} m2
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Deskripsi :</strong> {this.props.dataDetailRumah.detail.deskripsi} 
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleClose()} >
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            )
        } else {
            return (
                <Modal show={this.props.showDetail} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detail House</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                {/* <Image src={"asset/images/Rumah/" +  + '.jpg'}></Image> */}
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.handleClose()} >
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            )
        }
    }
}

export default DetailHouse;