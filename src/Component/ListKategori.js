import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

class ListKategori extends React.Component {
    render() {
        return (
            <Col md={2} className="mt-2">
                <h3>Kategori</h3>
                <hr/>
                <ListGroup>
                    {
                        this.props.dataKategori.map((dataKategori, index) => (
                            <ListGroup.Item
                             key={index} onClick={() => this.props.handlePilihKategori(dataKategori.nama)}
                             className={this.props.pilihKategori === dataKategori.nama && 'bg-primary'}
                            >
                                {dataKategori.nama}
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Col>
        )
    }
}


export default ListKategori;