import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/FormatNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

class DetailKeranjang extends React.Component {
    render() {
        if(this.props.detailKeranjang) {
            return (
                <Modal show={this.props.showModal} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Pesanan
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
    
                        <Form onSubmit={(event) => this.props.handleSubmit(event)}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <h5>{this.props.detailKeranjang.produk.nama}</h5>
                                <strong>Rp. {numberWithCommas(this.props.hargaTotal)}</strong>  
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <h5>Jumlah Pesanan :</h5>
                                <Button variant='primary' size="sm" className='mr-3' onClick={this.props.handleKurang}>
                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                </Button>
                                <input type="text" value={this.props.jumlahPesan} className='jumlahPesan'></input>
                                <Button variant='primary' size="sm" className='ml-3' onClick={() => this.props.handleTambah()} >
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </Button>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Keterangan</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.props.keterangan} placeholder='Contoh : Pedas, Manis, Setengah' onChange={(event) => this.props.handleKeteranganChange(event)}/>
                            </Form.Group>

                            <Button variant='primary' type='submit'>
                                SIMPAN
                            </Button>
                        </Form>

                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.handleDelete}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Hapus Pesanan
                        </Button>
                    </Modal.Footer>
                </Modal>
            )
        } else {
            return (
                <Modal show={this.props.showModal} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Pesanan
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
    
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <h5>kosong</h5>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            )
        }
        
    }
}

export default DetailKeranjang;