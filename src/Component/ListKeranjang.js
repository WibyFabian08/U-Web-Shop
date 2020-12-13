import React from 'react';
import { Fragment } from 'react';
import { Modal, Button, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/FormatNumber';
import DetailKeranjang from './DetailKeranjang';

class ListKeranjang extends React.Component {

    state = {
        showModal: false,
        detailKeranjang: false,
        jumlahPesan: 0
    }

    handleShow = (data) => {
        this.setState({
            showModal: true,
            detailKeranjang: data,
            jumlahPesan: data.jumlahPesan
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    handleTambah = () => {
        this.setState({
            jumlahPesan: this.state.jumlahPesan + 1
        })
    }

    handleKurang = () => {
        if(this.state.jumlahPesan > 1) {
            this.setState({
                jumlahPesan: this.state.jumlahPesan - 1
            })
        }
    }


    render() {
        // console.log('data state :', this.state.detailKeranjang)
        return (
            <Fragment>
                <Modal show={this.props.showModal} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Keranjang Anda</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup className='list-keranjang'>
                            {
                                this.props.dataKeranjang.map((data, index) => (
                                    <ListGroup.Item key={index} className='data-keranjang' onClick={() => this.handleShow(data)}>
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
    
                <DetailKeranjang handleClose={this.handleClose} showModal={this.state.showModal} detailKeranjang={this.state.detailKeranjang} handleTambah={this.handleTambah} handleKurang={this.handleKurang} jumlahPesan={this.state.jumlahPesan} ></DetailKeranjang>
            </Fragment>
        )
    }
}

export default ListKeranjang;