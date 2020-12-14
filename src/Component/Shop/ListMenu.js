import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { numberWithCommas } from '../../Utils/FormatNumber';

class ListMenu extends React.Component {
    render() {
        return(
            <Card style={{ width: '18rem' }} className='mr-3 mb-3 shadow list-card'>
                <Card.Img variant="top" src={"asset/images/" + this.props.dataProduk.category.nama.toLowerCase() + '/' + this.props.dataProduk.gambar} />
                <Card.Body>
                    <Card.Title>{this.props.dataProduk.nama}</Card.Title>
                    <Card.Text>
                        <strong>Rp. {numberWithCommas(this.props.dataProduk.harga)}</strong>
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.handleTambahKeranjang(this.props.dataProduk)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ListMenu;