import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

class ListMenu extends React.Component {
    render() {
        return(
            <Card style={{ width: '18rem' }} className='mr-3 mb-3'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ListMenu;