import React from 'react';
import { Card, Button } from 'react-bootstrap';

class ListRumah extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} className='ml-3 mb-3 shadow list-rumah'>
                <Card.Img variant="top" src={"asset/images/Rumah/" + this.props.dataRumah.gambar + '.jpg'} />
                <Card.Body>
                    <Card.Title>{this.props.dataRumah.nama}</Card.Title>
                    <Card.Title>{this.props.dataRumah.kode}</Card.Title>
                    <Button variant="primary">See Detail</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ListRumah;