import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

class ListKeranjang extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Keranjang Anda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {
                            this.props.dataKeranjang.map((dataKeranjang, index) => (
                                <ListGroup.Item>{dataKeranjang}</ListGroup.Item>
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