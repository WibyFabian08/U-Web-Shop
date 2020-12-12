import React from 'react';
import { Modal, Button, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/FormatNumber';

class ListKeranjang extends React.Component {
    
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Keranjang Anda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className='list-keranjang'>
                        {
                            this.props.dataKeranjang.map((data, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col xs={1}>
                                            <Badge pill variant="danger">{data.jumlahPesan}</Badge>
                                        </Col>
                                        <Col>
                                            <h5>{data.produk.nama}</h5>
                                            Rp. {numberWithCommas(data.produk.harga)}
                                        </Col>
                                        <Col>
                                            <strong className='float-right'> Rp. {numberWithCommas(data.hargaTotal)}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ListKeranjang;