import React from 'react';
import { Fragment } from 'react';
import { Modal, Button, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/FormatNumber';
import DetailKeranjang from './DetailKeranjang';
import axios from 'axios';
import swal from 'sweetalert';

class ListKeranjang extends React.Component {

    state = {
        showModal: false,
        detailKeranjang: false,
        jumlahPesan: 0,
        hargaTotal: 0,
        keterangan: ''
    }

    handleShow = (data) => {
        this.setState({
            showModal: true,
            detailKeranjang: data,
            jumlahPesan: data.jumlahPesan,
            hargaTotal: data.hargaTotal,
            keterangan : data.keterangan
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    handleTambah = () => {
        this.setState({
            jumlahPesan: this.state.jumlahPesan + 1,
            hargaTotal: this.state.detailKeranjang.produk.harga * (this.state.jumlahPesan + 1)
        })
    }

    handleKurang = () => {
        if(this.state.jumlahPesan > 1) {
            this.setState({
                jumlahPesan: this.state.jumlahPesan - 1,
                hargaTotal: this.state.detailKeranjang.produk.harga * (this.state.jumlahPesan - 1)
            })
        }
    }

    handleKeteranganChange = (event) => {
        this.setState({
            keterangan: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const dataUpdate = {
            jumlahPesan: this.state.jumlahPesan,
            hargaTotal: this.state.hargaTotal,
            produk: this.state.detailKeranjang.produk,
            keterangan: this.state.keterangan
        }

        axios.put('http://localhost:3004/keranjangs/' + this.state.detailKeranjang.id, dataUpdate)
        .then((response) => {
        setTimeout(() => {
            window.location.reload();
            }, 1500);
          swal({
            title: "Update Keranjang Sukses",
            text: 'Pesanan Sukses Di-Update',
            icon: "success",
            button: "OK",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    handleDelete = () => {
        axios.delete('http://localhost:3004/keranjangs/' + this.state.detailKeranjang.id)
        .then((response) => {
        setTimeout(() => {
            window.location.reload();
            }, 1500);
          swal({
            title: "Delete Pesanan Sukses",
            text: 'Pesanan Sukses Di-Hapus',
            icon: "success",
            button: "OK",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
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
    
                <DetailKeranjang handleClose={this.handleClose} showModal={this.state.showModal} detailKeranjang={this.state.detailKeranjang} handleTambah={this.handleTambah} handleKurang={this.handleKurang} jumlahPesan={this.state.jumlahPesan} hargaTotal={this.state.hargaTotal} keterangan={this.state.keterangan} handleKeteranganChange={this.handleKeteranganChange} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete}></DetailKeranjang>
            </Fragment>
        )    
    }
}

export default ListKeranjang;