import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

class ListKeranjang extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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